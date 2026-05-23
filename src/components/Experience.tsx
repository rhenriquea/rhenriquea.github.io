import { useEffect, useMemo, useRef, useState } from "react";
import { EXPERIENCE, MONO_MAP, type ExperienceEntry } from "../data/experience";
import { COMPANY_LOGOS } from "./CompanyLogo";
import OdometerYear from "./OdometerYear";
import RoleDialog from "./RoleDialog";

const getYear = (x: ExperienceEntry): string => {
  if (x.current) return "Now";
  const parts = x.date.split(/—|–|-/);
  const last = parts[parts.length - 1].trim();
  const m = last.match(/\d{4}/);
  return m ? m[0] : parts[0].trim();
};

type Pos = "active" | "prev" | "next" | "prev2" | "next2" | "far";

const Experience: React.FC = () => {
  const TIMELINE = useMemo(() => [...EXPERIENCE].reverse(), []);
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeIdx, setActiveIdx] = useState(TIMELINE.length - 1);

  const active = openId ? EXPERIENCE.find((x) => x.id === openId) ?? null : null;
  const activeYear = getYear(TIMELINE[activeIdx]);

  const goTo = (i: number) => {
    const n = TIMELINE.length;
    setActiveIdx(((i % n) + n) % n);
  };
  const goNext = () => goTo(activeIdx + 1);
  const goPrev = () => goTo(activeIdx - 1);

  const goNextDialog = () => {
    const n = TIMELINE.length;
    const ni = ((activeIdx + 1) % n + n) % n;
    setActiveIdx(ni);
    setOpenId(TIMELINE[ni].id);
  };
  const goPrevDialog = () => {
    const n = TIMELINE.length;
    const ni = ((activeIdx - 1) % n + n) % n;
    setActiveIdx(ni);
    setOpenId(TIMELINE[ni].id);
  };

  useEffect(() => {
    if (!openId) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (openId) goNextDialog();
        else goNext();
      } else if (e.key === "ArrowLeft") {
        if (openId) goPrevDialog();
        else goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx, openId]);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { x: e.clientX, active: true };
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.x;
    dragRef.current.active = false;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
  };

  const posFor = (i: number): Pos => {
    const d = i - activeIdx;
    if (d === 0) return "active";
    if (d === -1) return "prev";
    if (d === 1) return "next";
    if (d === -2) return "prev2";
    if (d === 2) return "next2";
    return "far";
  };

  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-kicker">Experience</span>
          <h2 className="sec-title">
            A decade in <span className="accent">production</span>.
          </h2>
          <p className="sec-sub">
            Use the arrows or swipe to navigate. Click <em>Read more</em> for role details.
          </p>
        </div>

        <div className="tlh-year-wrap" aria-hidden="true">
          <OdometerYear value={activeYear} />
        </div>

        <div className="xc">
          <button
            type="button"
            className="xc-arrow prev"
            onClick={goPrev}
            aria-label="Previous role"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18 9 12l6-6" />
            </svg>
          </button>

          <div
            className="xc-stage"
            ref={stageRef}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              dragRef.current.active = false;
            }}
          >
            {TIMELINE.map((x, i) => {
              const Logo = COMPANY_LOGOS[x.id];
              const pos = posFor(i);
              return (
                <div
                  key={x.id}
                  className="xc-card"
                  data-pos={pos}
                  aria-label={`${x.company} — ${x.role}`}
                  onClick={() => {
                    if (pos !== "active") goTo(i);
                  }}
                >
                  <div className="xc-media">
                    <span className="xc-date">{x.date}</span>
                    {x.current && <span className="xc-current-tag">Now</span>}
                    <div className="xc-media-logo">
                      {Logo ? (
                        <Logo width={140} height={140} />
                      ) : (
                        <div>{MONO_MAP[x.id] || x.company[0]}</div>
                      )}
                    </div>
                  </div>
                  <div className="xc-body">
                    <div className="xc-company">{x.company}</div>
                    <div className="xc-role">{x.role}</div>
                    <p className="xc-sum">{x.summary}</p>
                    {x.stack.length > 0 && (
                      <div className="xc-tags">
                        {x.stack.slice(0, 5).map((s) => (
                          <span key={s} className="xc-tag">
                            {s}
                          </span>
                        ))}
                        {x.stack.length > 5 && (
                          <span className="xc-tag xc-tag-more">+{x.stack.length - 5}</span>
                        )}
                      </div>
                    )}
                    <button
                      type="button"
                      className="xc-readmore"
                      tabIndex={pos === "active" ? 0 : -1}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (pos === "active") setOpenId(x.id);
                        else goTo(i);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="xc-arrow next"
            onClick={goNext}
            aria-label="Next role"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="xc-dots" role="tablist" aria-label="Role timeline">
            {TIMELINE.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`xc-dot ${activeIdx === i ? "on" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to role ${i + 1}`}
                aria-selected={activeIdx === i}
              />
            ))}
          </div>
        </div>
      </div>

      {active && (
        <RoleDialog
          role={active}
          mono={MONO_MAP[active.id] || active.company[0]}
          Logo={COMPANY_LOGOS[active.id]}
          onClose={() => setOpenId(null)}
          onPrev={goPrevDialog}
          onNext={goNextDialog}
        />
      )}
    </section>
  );
};

export default Experience;
