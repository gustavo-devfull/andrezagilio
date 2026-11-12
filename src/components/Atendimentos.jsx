import logoIse from '../assets/logo-ise-444x272-1.png';
import { GALLERY, TELEFONES, WHATSAPP } from '../data.js';

export default function Atendimentos({ showGallery = true }) {
  return (
    <section id="atendimentos" className="container atendimentos">
      <div className="atendimentos-topo">
        <div className="coluna" style={{ gap: 18 }}>
          <h2 className="h2" style={{ color: '#1E8540' }}>Atendimentos</h2>
          <div className="endereco">
            <img src={logoIse} alt="ISE – Instituto de Saúde Especializado" className="logo-ise" style={{ height: 84, borderRadius: 16, padding: 8 }} />
            <p className="texto" style={{ lineHeight: 1.5 }}>Av. Casemiro Perez, 180,<br />Vila Harmonia, Araraquara – SP</p>
          </div>
        </div>
        <div className="agendamentos">
          <h3>Agendamentos</h3>
          <p className="texto" style={{ lineHeight: 1.5 }}>{TELEFONES}</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="pill pill-branco">Chamar no WhatsApp</a>
        </div>
      </div>
      {showGallery && (
        <div className="galeria">
          {GALLERY.map(g => (
            <a key={g.src} href={g.src} target="_blank" rel="noreferrer" style={{ borderColor: g.color, background: g.color }}>
              <img src={g.src} alt="Clínica ISE" />
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
