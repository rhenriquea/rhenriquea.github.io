const impacts = [
  {
    badge: "Hi-Fi Stereo",
    badgeBg: "bg-[#ff2d7b]",
    borderColor: "border-[#ff2d7b]",
    metric: "~$10K",
    subtitle: "VENDOR ELIMINATED",
    subtitleColor: "text-[#ff2d7b]",
    decoColor: "decoration-[#00f0ff]",
    tagline: '"The one where we didn\'t need the vendor."',
    description:
      "Built an in-house integration that replaced a third-party vendor entirely, saving the company approximately $10,000 and giving full ownership of the pipeline.",
    company: "Formula.Monks — Senior Engineer / Team Lead",
    companyColor: "text-[#ff2d7b]",
    pulseColor: "bg-[#ff2d7b]/30",
  },
  {
    badge: "AI Master",
    badgeBg: "bg-[#00f0ff]",
    borderColor: "border-[#00f0ff]",
    metric: "RAG AI",
    subtitle: "AI-POWERED CHAT",
    subtitleColor: "text-[#00f0ff]",
    decoColor: "decoration-[#ff2d7b]",
    tagline: '"The one where the chatbot got smart."',
    description:
      "Pioneered an AI chat feature using Vertex AI with Retrieval-Augmented Generation, revolutionizing customer interaction with context-aware, intelligent responses.",
    company: "Formula.Monks — Senior Engineer / Team Lead",
    companyColor: "text-[#00f0ff]",
    pulseColor: "bg-[#00f0ff]/30",
  },
  {
    badge: "Enterprise",
    badgeBg: "bg-[#f8a826]",
    borderColor: "border-[#f8a826]",
    metric: "SHIPPED",
    subtitle: "CUSTOMER REFUND SYSTEM",
    subtitleColor: "text-[#f8a826]",
    decoColor: "decoration-white",
    tagline: '"The one where customers got their money back."',
    description:
      "Led two engineers to launch Jumbo Supermarkten's customer refund project, migrated legacy systems to SSR Nuxt with microservices and GraphQL architecture.",
    company: "Jumbo Supermarkten — Solutions Engineer",
    companyColor: "text-[#f8a826]",
    pulseColor: "bg-[#f8a826]/30",
  },
];

export default function ImpactTape() {
  return (
    <section className="py-32 px-6 bg-[#150529] overflow-hidden" id="vhs">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-24">
          <div className="poster-pink p-4 shadow-[10px_10px_0_#00f0ff]">
            <span className="material-symbols-outlined text-black text-6xl font-black">movie</span>
          </div>
          <h2 className="font-chrome text-6xl md:text-8xl font-black italic text-white tracking-tighter drop-shadow-[0_0_20px_rgba(0,240,255,0.5)]">
            IMPACT_TAPE
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {impacts.map((item) => (
            <div
              key={item.metric}
              className={`relative bg-black border-r-[12px] ${item.borderColor} group hover:scale-105 transition-transform duration-500 shadow-2xl`}
            >
              <div className="aspect-[2/3] p-8 flex flex-col justify-between">
                <div>
                  <div className={`${item.badgeBg} text-black px-4 py-1 font-label text-xs inline-block mb-6 uppercase font-black tracking-widest shadow-[4px_4px_0_white]`}>
                    {item.badge}
                  </div>
                  <h3 className={`font-chrome text-4xl font-extrabold italic text-white leading-tight uppercase underline decoration-4 underline-offset-8 ${item.decoColor} mb-4`}>
                    {item.metric}
                  </h3>
                  <p className={`${item.subtitleColor} font-label text-xs font-bold tracking-widest`}>
                    {item.subtitle}
                  </p>
                </div>
                <div className="vhs-tape-window h-32 border border-white/10 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className={`w-24 h-1.5 ${item.pulseColor} rounded-full animate-pulse`} />
                </div>
                <div className="space-y-4">
                  <div className="font-headline text-xl text-white font-black italic">{item.tagline}</div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
                  <div className={`font-label text-xs ${item.companyColor} tracking-widest uppercase font-bold`}>
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
