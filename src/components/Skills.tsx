const skills = [
  {
    icon: "cloud",
    title: "Cloud & Infra",
    color: "#00f0ff",
    accentClass: "poster-cyan",
    items: ["AWS / Azure / GCP", "Kubernetes", "Terraform"],
    level: "LVL 99",
  },
  {
    icon: "code",
    title: "Frontend",
    color: "#ff2d7b",
    accentClass: "poster-pink",
    items: ["React / Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    icon: "database",
    title: "Backend",
    color: "#f8a826",
    accentClass: "poster-yellow",
    items: ["Node.js / Go", "PostgreSQL", "GraphQL"],
  },
  {
    icon: "psychology",
    title: "AI & ML",
    color: undefined,
    accentClass: "bg-purple-500",
    textColor: "text-purple-400",
    items: ["LLM Engineering", "Vertex AI", "LangChain"],
  },
  {
    icon: "groups",
    title: "Leadership",
    color: undefined,
    accentClass: "bg-emerald-500",
    textColor: "text-emerald-400",
    items: ["Mentoring", "Agile Flow", "Architecture"],
  },
];

export default function Skills() {
  return (
    <section className="py-32 px-6 bg-surface-container-low" id="arcade">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col items-center md:items-start">
          <h2 className="font-label text-2xl text-[#00f0ff] uppercase tracking-[0.6em] mb-6 font-black italic">
            Select Your Power-up
          </h2>
          <div className="h-2 w-48 poster-cyan shadow-[0_0_20px_#00f0ff]" />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-black relative group hover:-translate-y-4 transition-all duration-300 cursor-pointer border border-white/5 shadow-2xl overflow-hidden"
            >
              <div className={`h-6 ${skill.accentClass}`} />
              <div className="p-8">
                <span
                  className={`material-symbols-outlined ${skill.textColor ?? ""} mb-6 text-4xl neon-flicker`}
                  style={skill.color ? { color: skill.color } : undefined}
                >
                  {skill.icon}
                </span>
                <h3 className="font-headline text-2xl font-black mb-6 italic text-white">{skill.title}</h3>
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div key={item} className="text-[11px] font-label uppercase text-on-surface-variant font-bold tracking-widest border-b border-white/5 pb-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {skill.level && (
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-chrome text-xs text-[#00f0ff] italic">{skill.level}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
