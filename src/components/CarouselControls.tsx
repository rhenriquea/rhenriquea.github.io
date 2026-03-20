import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface CarouselControlsProps {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  totalDots: number;
  currentIndex: number;
  onGoTo: (index: number) => void;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  canPrev,
  canNext,
  onPrev,
  onNext,
  totalDots,
  currentIndex,
  onGoTo,
}) => {
  return (
    <div className="flex items-center justify-center gap-6 mt-10">
      <button
        onClick={onPrev}
        disabled={!canPrev}
        className="p-2 border border-white/10 text-accent-cyan disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
        aria-label="Previous"
        type="button"
      >
        <MdChevronLeft className="text-2xl" />
      </button>
      <div className="flex gap-2" role="tablist" aria-label="Carousel navigation">
        {Array.from({ length: totalDots }, (_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentIndex
                ? "bg-accent-cyan w-6"
                : "bg-white/20 hover:bg-white/40"
            }`}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            type="button"
          />
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={!canNext}
        className="p-2 border border-white/10 text-accent-cyan disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
        aria-label="Next"
        type="button"
      >
        <MdChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

export default CarouselControls;
