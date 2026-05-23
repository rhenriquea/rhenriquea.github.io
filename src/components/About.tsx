import Reveal from "./Reveal";

const KV = [
  { lbl: "Based", val: "Sittard, Netherlands" },
  { lbl: "Relocating", val: "Brazil · Remote" },
  { lbl: "Experience", val: "10+ years" },
  { lbl: "Focus", val: "Platform · DevOps" },
  { lbl: "Status", val: "Open to senior roles", accent: true },
  { lbl: "Languages", val: "PT · EN · NL · ES" },
];

const About: React.FC = () => {
  return (
    <section id="about" className="sec" style={{ background: "var(--bg-soft)" }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="sec-kicker">About</span>
          <h2 className="sec-title">
            A decade <span className="accent">owning reliability</span> end-to-end.
          </h2>
        </Reveal>

        <Reveal>
          <div className="about-panel">
            <div>
              <p className="about-quote">
                Known for <span className="accent">owning reliability end-to-end</span>
                {" "}— from IaC and pipelines to observability and incident response.
              </p>
              <p className="about-by">
                Strong Bash against the AWS SDK, Postgres/SQL schema migrations, and cross-account
                data migrations on DynamoDB. Fluent in English (C1), intermediate Dutch.
              </p>
            </div>
            <div>
              <div className="about-kv">
                {KV.map((kv) => (
                  <div key={kv.lbl}>
                    <div className="lbl">{kv.lbl}</div>
                    <div
                      className="val"
                      style={kv.accent ? { color: "var(--accent)" } : undefined}
                    >
                      {kv.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
