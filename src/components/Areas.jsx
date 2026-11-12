import { useState } from 'react';
import { AREAS, WHATSAPP } from '../data.js';

function AreaCard({ area }) {
  const [aberto, setAberto] = useState(false);
  return (
    <article className="card">
      <div style={{ background: area.color }}>
        <img src={area.img} alt={area.title} />
      </div>
      <div className="card-body" style={{ borderTopColor: area.color }}>
        <h3>{area.title}</h3>
        <p className={aberto ? '' : 'fechado'}>{area.text}</p>
        <div className="card-acoes">
          <button className="unset card-toggle" style={{ borderColor: area.color }} onClick={() => setAberto(a => !a)}>
            {aberto ? 'Ver menos' : 'Saiba mais'}
          </button>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="card-agendar" style={{ background: area.color, color: area.fg }}>
            Agende uma consulta
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Areas() {
  return (
    <section id="areas" className="areas">
      <div className="container areas-inner">
        <h2 className="h2 areas-titulo">Áreas de atuação</h2>
        <div className="areas-grid">
          {AREAS.map(a => <AreaCard key={a.title} area={a} />)}
        </div>
      </div>
    </section>
  );
}
