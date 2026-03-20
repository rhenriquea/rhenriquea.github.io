import { MdExpandMore } from "react-icons/md";

interface ScrollDownProps {
  to: string;
  label?: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ to, label = "Scroll to next section" }) => {
  return (
    <div className="flex justify-center pt-8 mt-auto">
      <a
        href={`#${to}`}
        className="animate-bounce p-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-cyan"
        aria-label={label}
      >
        <MdExpandMore className="text-accent-pink text-3xl opacity-50 hover:opacity-100 transition-opacity" />
      </a>
    </div>
  );
};

export default ScrollDown;
