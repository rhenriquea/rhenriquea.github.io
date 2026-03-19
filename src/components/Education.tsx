import { useScrollReveal } from "../hooks/useScrollReveal";

const degrees = [
  {
    type: "Master's degree",
    degree: "MSc in Management (iMSM)",
    school: "University of Illinois Urbana-Champaign",
    date: "July 2023 — July 2024",
    level: "Wetenschappelijk Onderwijs",
    featured: true,
  },
  {
    type: "Bachelor's degree",
    degree: "B.S. in Applied Technology",
    school: "Brigham Young University, Idaho",
    date: "Summer 2016 — Winter 2022",
    level: "Hoger Beroepsonderwijs",
  },
  {
    type: "Technical degree",
    degree: "Mechatronic Technician",
    school: "Paula Souza Center, Sao Paulo",
    date: "Sept 2008 — Dec 2010",
    level: "Middelbaar Beroepsonderwijs",
  },
];

const certs = [
  { icon: "📋", name: "Google Project Management", detail: "Coursera — March 2022" },
  { icon: "🔄", name: "Applied Scrum for PM", detail: "Univ. of Maryland — June 2019" },
  { icon: "🖥️", name: "Web Frontend", detail: "BYU-Idaho — July 2022" },
  { icon: "🎨", name: "Graphic Design", detail: "BYU-Idaho — July 2022" },
  { icon: "⚙️", name: "Web Development", detail: "BYU-Idaho — July 2022" },
];

export default function Education() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section className="py-32 px-6 bg-black" id="education" ref={sectionRef}>
      <div className="edu-inner">
        <h2 className="font-label text-xs text-[#ff2d7b] uppercase tracking-[1em] text-center mb-24 font-black reveal">
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
          {certs.map((c) => (
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
}
