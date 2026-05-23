import { useEffect, useRef, useState } from "react";
import { SKILLS } from "../data/skills";
import { EDUCATION } from "../data/education";
import { LANGUAGES } from "../data/languages";
import { SKILL_ICONS } from "./Icon";
import { EDU_LOGOS } from "./EduLogo";
import { FLAGS } from "./Flag";
import Reveal from "./Reveal";

const Skills: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!rootRef.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimate(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className="sec" ref={rootRef}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-kicker">Skills</span>
          <h2 className="sec-title">
            The <span className="accent">stack</span>.
          </h2>
        </Reveal>

        <div className="skills-grid">
          {SKILLS.map((g, gi) => {
            const IconComp = SKILL_ICONS[g.icon];
            return (
              <Reveal key={g.group} delay={gi * 80}>
                <div className="skill-group">
                  <h3>
                    <span className="skill-group-head">
                      <span className="skill-group-ico">
                        <IconComp width={16} height={16} />
                      </span>
                      {g.group}
                    </span>
                    <span className="num">{String(g.items.length).padStart(2, "0")}</span>
                  </h3>
                  {g.items.map((s, i) => (
                    <div key={s.name} className="skill-row">
                      <div className="skill-name">{s.name}</div>
                      <div className="skill-bar">
                        <div
                          className="fill"
                          style={{
                            width: animate ? `${s.level * 100}%` : 0,
                            transitionDelay: `${gi * 100 + i * 50}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="sec-head" style={{ marginTop: 96, marginBottom: 0 }}>
          <span className="sec-kicker">Education</span>
          <h2 className="sec-title" style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>
            <span className="accent">Credentials</span>.
          </h2>
        </Reveal>
        <div className="edu-grid">
          {EDUCATION.map((e, i) => {
            const Logo = EDU_LOGOS[e.logo];
            return (
              <Reveal key={e.school} delay={i * 60}>
                <div className="edu-card">
                  <div className="edu-logo">
                    <Logo width={48} height={48} />
                  </div>
                  <div className="edu-body">
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-deg">{e.degree}</div>
                    <div className="edu-date">{e.date}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="sec-head" style={{ marginTop: 96, marginBottom: 0 }}>
          <span className="sec-kicker">Languages</span>
          <h2 className="sec-title" style={{ fontSize: "clamp(32px, 4vw, 44px)" }}>
            Four <span className="accent">languages</span>.
          </h2>
        </Reveal>
        <div className="lang-row">
          {LANGUAGES.map((l, i) => {
            const FlagComp = FLAGS[l.flag];
            return (
              <Reveal key={l.name} delay={i * 50}>
                <div className="lang-card">
                  <div className="lang-flag">
                    <FlagComp width={40} height={28} />
                  </div>
                  <div className="name">{l.name}</div>
                  <div className="lvl">{l.lvl}</div>
                  <div className="bars" aria-label={`${l.bars} out of 5`}>
                    {[0, 1, 2, 3, 4].map((n) => (
                      <span key={n} className={`star ${n < l.bars ? "on" : "off"}`} aria-hidden="true">
                        <svg
                          viewBox="0 0 24 24"
                          fill={n < l.bars ? "currentColor" : "none"}
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2.8 14.85 9l6.65.6-5.05 4.55 1.5 6.55L12 17.3 6.05 20.7l1.5-6.55L2.5 9.6 9.15 9z" />
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
