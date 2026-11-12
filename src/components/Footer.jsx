import logo from '../assets/Camada_1.svg';
import logoIse from '../assets/logo-ise-444x272-1.png';
import { INSTAGRAM, TELEFONES, WHATSAPP } from '../data.js';

const CORES = ['#1E8540', '#2B6E93', '#F2B33D', '#EE97A6'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-topo">
          <img src={logo} alt="Dra. Andreza Gilio" className="footer-logo" />
          <div className="endereco" style={{ gap: 16 }}>
            <img src={logoIse} alt="ISE" className="logo-ise" style={{ height: 56, borderRadius: 12, padding: 6 }} />
            <p>Av. Casemiro Perez, 180,<br />Vila Harmonia, Araraquara – SP</p>
          </div>
          <div className="footer-contato">
            <p>{TELEFONES}</p>
            <div className="footer-sociais">
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="footer-social" style={{ background: '#EE97A6', color: '#1E2A3A' }}>Instagram</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="footer-social" style={{ background: '#1E8540', color: '#fff' }}>WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="footer-barra">
          {CORES.map(c => <div key={c} style={{ background: c }} />)}
        </div>
        <div className="footer-base">
          <span>CRM-SP 129977 – Endocrinologia Pediátrica | RQE: 422561</span>
          <a href="https://gpreto.site/" target="_blank" rel="noreferrer">Desenvolvimento: Gpreto Soluções Digitais</a>
        </div>
      </div>
    </footer>
  );
}
