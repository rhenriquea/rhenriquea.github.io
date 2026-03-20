import { degrees, certificates } from "../data/education";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCarousel } from "../hooks/useCarousel";
import CarouselControls from "./CarouselControls";
import ScrollDown from "./ScrollDown";

const Education: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>();
  const { currentIndex, prev, next, goTo, canPrev, canNext, totalDots } =
    useCarousel(degrees.length, 1);

  return (
    <section className="section-full px-6 bg-black" id="education" ref={sectionRef}>
      <div className="edu-inner">
        <h2 className="font-label text-xs text-accent-pink uppercase tracking-[1em] text-center mb-16 font-black reveal">
          End Credits // Academic Standing
        </h2>
        <div className="overflow-hidden reveal">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {degrees.map((d) => (
              <div key={d.degree} className="min-w-full flex justify-center px-4">
                <div className={`edu-card${d.featured ? " featured" : ""} w-full max-w-md`}>
                  <div className="edu-type">{d.type}</div>
                  <div className="edu-degree">{d.degree}</div>
                  <div className="edu-school">{d.school}</div>
                  <div className="edu-date">{d.date}</div>
                  <div className="edu-level">{d.level}</div>
                </div>
              </div>
            ))}
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
        <div className="cert-grid reveal mt-12">
          {certificates.map((c) => (
            <div key={c.name} className="cert-card">
              <div className="cert-icon" aria-hidden="true">{c.icon}</div>
              <div className="cert-name">
                <strong>{c.name}</strong>
                {c.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollDown to="contact" />
    </section>
  );
};

export default Education;
