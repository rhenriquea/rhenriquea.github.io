import { degrees, certificates } from "../data/education";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Education: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="py-32 px-6 bg-black" id="education" ref={sectionRef}>
      <div className="edu-inner">
        <h2 className="font-label text-xs text-accent-pink uppercase tracking-[1em] text-center mb-24 font-black reveal">
          End Credits // Academic Standing
        </h2>
        <div className="edu-scroll reveal">
          {degrees.map((d) => (
            <div key={d.degree} className={`edu-card${d.featured ? " featured" : ""}`}>
              <div className="edu-type">{d.type}</div>
              <div className="edu-degree">{d.degree}</div>
              <div className="edu-school">{d.school}</div>
              <div className="edu-date">{d.date}</div>
              <div className="edu-level">{d.level}</div>
            </div>
          ))}
        </div>
        <div className="cert-grid reveal">
          {certificates.map((c) => (
            <div key={c.name} className="cert-card">
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-name">
                <strong>{c.name}</strong>
                {c.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
