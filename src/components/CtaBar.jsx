import { TELEFONES, WHATSAPP } from '../data.js';

export default function CtaBar() {
  return (
    <section className="cta-bar">
      <div className="container cta-bar-inner">
        <h2>{TELEFONES}</h2>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="pill pill-amarelo">Agendar pelo WhatsApp</a>
      </div>
    </section>
  );
}
