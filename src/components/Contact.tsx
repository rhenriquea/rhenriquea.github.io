import Reveal from "./Reveal";
import { PROFILE } from "../data/profile";
import { IconArrow, IconMail, IconPhone, IconLinkedIn, IconGitHub } from "./Icon";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="sec contact-section">
      <div className="wrap">
        <Reveal>
          <div className="contact-panel">
            <span className="sec-kicker">Contact</span>
            <h2 className="contact-head">
              Hiring for a <span className="accent">staff engineer</span>?
              <br />
              Vamos conversar.
            </h2>
            <p className="contact-lede">
              Open to staff / full-stack / DDD-focused roles — remote, based in Brazil from Q3 2026.
            </p>
            <div className="contact-links">
              <a className="contact-chip" href={`mailto:${PROFILE.email}`}>
                <IconMail width="16" height="16" />
                <span className="lbl">Mail</span>
                {PROFILE.email}
              </a>
              <a className="contact-chip" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                <IconPhone width="16" height="16" />
                <span className="lbl">Call</span>
                {PROFILE.phone}
              </a>
              <a className="contact-chip" href={`https://${PROFILE.linkedin}`} target="_blank" rel="noopener">
                <IconLinkedIn width="16" height="16" />
                <span className="lbl">In</span>
                rhenriquea
              </a>
              <a className="contact-chip" href={`https://${PROFILE.github}`} target="_blank" rel="noopener">
                <IconGitHub width="16" height="16" />
                <span className="lbl">GH</span>
                rhenriquea
              </a>
            </div>
            <a href="assets/Rafael_Almeida_CV.pdf" target="_blank" rel="noopener" className="btn btn-primary">
              Download Résumé <IconArrow width="16" height="16" />
            </a>
          </div>
        </Reveal>
      </div>
      <footer>© MMXXVI · Rafael Almeida · Built with care in Sittard</footer>
    </section>
  );
};

export default Contact;
