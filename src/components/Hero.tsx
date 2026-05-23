import Reveal from "./Reveal";
import { IconArrow, IconPdf, IconHex, IconStar, IconUser, IconCode, IconCloud, IconActivity } from "./Icon";

const SERVICES = [
  {
    icon: <IconHex width="28" height="28" />,
    h: "Domain-Driven Design",
    p: "Event Storming, bounded contexts, and Spec-Driven Development that decouple teams and clarify APIs.",
  },
  {
    icon: <IconCode width="28" height="28" />,
    h: "Full-Stack Delivery",
    p: "TypeScript end-to-end — React/Next.js, Node.js, GraphQL on AppSync, zero-to-production.",
  },
  {
    icon: <IconCloud width="28" height="28" />,
    h: "Serverless AWS",
    p: "Lambda, AppSync, DynamoDB, Cognito, CDK — cost-efficient systems without ops overhead.",
  },
  {
    icon: <IconActivity width="28" height="28" />,
    h: "Event-Driven & AI",
    p: "Kafka integrations, Vertex AI + RAG in production, agentic workflows for docs and QA.",
  },
];

const Hero: React.FC = () => {
  return (
    <section id="top" className="hero-section">
      <div className="wrap">
        <div className="hero-aura" />
        <div className="panel">
          <div className="hero-grid">
            <Reveal>
              <div className="southeast-chip">
                <span className="flag" />
                <span>Sudeste · Brasil → Remote</span>
              </div>
              <div
                className="hero-role"
                style={{ fontSize: 14, color: "var(--fg-dim)", marginBottom: 20 }}
              >
                Staff Software Engineer · TypeScript · Node.js · React · AWS · DDD
              </div>
              <h1 className="hero-title">
                I'm <span className="accent">Rafael</span>, a staff software engineer
              </h1>
              <p className="hero-lede">
                Brasileiro em São Paulo com 10 anos em empresas europeias. TypeScript, Node.js,
                React e AWS serverless — com foco em Event-Driven, DDD e full-stack delivery.
              </p>
              <div className="hero-cta-row">
                <a href="#contact" className="btn btn-primary">
                  Let's Talk <IconArrow width="16" height="16" />
                </a>
                <a
                  href="assets/Rafael_Almeida_CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost"
                >
                  <IconPdf width="16" height="16" /> Download CV
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="portrait-stage">
                <div className="dots dots-tl" />
                <div className="dots dots-br" />
                <div className="blob-dark" />
                <div className="blob" />
                <div className="portrait-img-wrap">
                  <img src="assets/rafael-portrait.png" alt="Rafael Almeida" />
                </div>

                <div className="stat-card pos-tl">
                  <div className="stat-icon">
                    <IconHex width="18" height="18" />
                  </div>
                  <div>
                    <div className="k">10+ Yrs</div>
                    <div className="v">Production</div>
                  </div>
                </div>

                <div className="stat-card pos-mr">
                  <div className="stat-icon rio">
                    <IconStar width="16" height="16" />
                  </div>
                  <div>
                    <div className="k">TypeScript</div>
                    <div className="v">Node · React · AWS</div>
                  </div>
                </div>

                <div className="stat-card pos-br">
                  <div className="stat-icon">
                    <IconUser width="18" height="18" />
                  </div>
                  <div>
                    <div className="k">Staff Engineer</div>
                    <div className="v">TS · DDD · AWS</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="services">
            <h3 className="services-head">
              <span className="dot" /> What I Do
            </h3>
            <div className="services-grid">
              {SERVICES.map((s, i) => (
                <Reveal key={s.h} delay={i * 80} className="service">
                  <div className="service-icon">{s.icon}</div>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
