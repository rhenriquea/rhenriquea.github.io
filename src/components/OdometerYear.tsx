interface OdometerYearProps {
  value: string;
}

const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const OdometerDigit: React.FC<{ target: string }> = ({ target }) => {
  const isDigit = /\d/.test(target);
  if (!isDigit) {
    return (
      <span className="tlh-odo tlh-odo-static">{target === " " ? " " : target}</span>
    );
  }
  const n = parseInt(target, 10);
  return (
    <span className="tlh-odo">
      <span className="tlh-odo-col" style={{ transform: `translateY(-${n * 10}%)` }}>
        {DIGITS.map((d) => (
          <span key={d} className="tlh-odo-d">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
};

const OdometerYear: React.FC<OdometerYearProps> = ({ value }) => {
  const chars = String(value).padStart(4, " ").split("");
  return (
    <div className="tlh-year">
      {chars.map((ch, i) => (
        <OdometerDigit key={i} target={ch} />
      ))}
    </div>
  );
};

export default OdometerYear;
