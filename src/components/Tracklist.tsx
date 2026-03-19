import { useState } from "react";
import { jobs } from "../data/jobs";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Tracklist() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="py-32 px-6 bg-[#150529] overflow-hidden" id="mixtape" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-20">
          <div className="w-80 mb-10 text-[#ff2d7b] drop-shadow-[0_0_15px_rgba(255,45,123,0.4)]">
            <svg fill="currentColor" viewBox="0 0 100 60">
              <rect fill="#322247" height="60" rx="4" width="100" />
              <rect fill="#000" height="25" rx="2" width="80" x="10" y="10" />
              <circle cx="30" cy="45" fill="#ff2d7b" fillOpacity="0.4" r="10" />
              <circle cx="70" cy="45" fill="#ff2d7b" fillOpacity="0.4" r="10" />
              <rect fill="#1b0b2f" height="8" rx="1" width="50" x="25" y="41" />
            </svg>
          </div>
          <div className="poster-yellow px-8 py-4 -rotate-2 shadow-[8px_8px_0_#ff2d7b] mb-6">
            <h2 className="font-headline text-5xl italic font-black text-black uppercase tracking-tighter">TRACKLIST: CAREER_SESSIONS</h2>
          </div>
          <div className="flex items-center gap-3 text-[#00f0ff] font-label uppercase tracking-[0.4em] text-sm neon-flicker">
            <span className="animate-pulse">● NOW PLAYING: ESSENT</span>
            <div className="flex gap-1 h-4 items-end">
              <div className="w-1.5 bg-[#00f0ff] h-full animate-[bounce_1s_infinite]" />
              <div className="w-1.5 bg-[#00f0ff] h-2/3 animate-[bounce_1.2s_infinite]" />
              <div className="w-1.5 bg-[#00f0ff] h-1/2 animate-[bounce_0.8s_infinite]" />
            </div>
          </div>
        </div>

        <div className="tracklist reveal">
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className={`track${i === activeIdx ? " active" : ""}`}
              onClick={() => setActiveIdx(i)}
            >
              <div className="track-num">{String(i + 1).padStart(2, "0")}</div>
              <div className="track-info">
                <h3>
                  {job.company}
                  {job.current && (
                    <span className="now-playing">
                      <span className="eq-bars">
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                        <span className="eq-bar" />
                      </span>{" "}
                      Now playing
                    </span>
                  )}
                </h3>
                <div className="role">{job.role}</div>
                <div className="location">{job.location} · {job.period}</div>
              </div>
              <div className="track-duration">{job.duration}</div>
              <div className="track-details">
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {job.tags.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
