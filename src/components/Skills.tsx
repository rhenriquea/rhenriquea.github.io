import { skills } from "../data/skills";
import { useCarousel } from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import ScrollDown from "./ScrollDown";

const Skills: React.FC = () => {
  const { currentIndex, prev, next, goTo, canPrev, canNext, totalDots } =
    useCarousel(skills.length, 3);

  return (
    <section className="section-full px-6 bg-surface-container-low" id="arcade">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col items-center md:items-start">
          <h2 className="font-label text-2xl text-accent-cyan uppercase tracking-[0.6em] mb-6 font-black italic">
            Select Your Power-up
          </h2>
          <div className="h-2 w-48 poster-cyan shadow-[0_0_20px_#00f0ff]" />
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(calc(-${currentIndex} * (100% / 3 + 0.67rem)))` }}
          >
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="min-w-[calc(33.333%-1.33rem)] bg-black relative group hover:-translate-y-4 transition-all duration-300 cursor-pointer border border-white/5 shadow-2xl overflow-hidden"
              >
                <div className={`h-6 ${skill.accentClass}`} />
                <div className="p-8">
                  <skill.icon className={`${skill.iconColor} mb-6 text-4xl neon-flicker`} />
                  <h3 className="font-headline text-2xl font-black mb-6 italic text-white">{skill.title}</h3>
                  <div className="space-y-3">
                    {skill.items.map((item) => (
                      <div key={item} className="text-xs font-label uppercase text-on-surface-variant font-bold tracking-widest border-b border-white/5 pb-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {skill.level && (
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="font-chrome text-xs text-accent-cyan italic">{skill.level}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <CarouselControls
          canPrev={canPrev}
          canNext={canNext}
          onPrev={prev}
          onNext={next}
          totalDots={totalDots}
          currentIndex={currentIndex}
          onGoTo={goTo}
        />
      </div>
      <ScrollDown to="vhs" />
    </section>
  );
};

export default Skills;
