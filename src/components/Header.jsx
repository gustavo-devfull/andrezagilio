import logo from '../assets/Group-1.svg';
import { WHATSAPP } from '../data.js';

const LINKS = [
  ['#sobre', 'Sobre'],
  ['#especialidade', 'Especialidade'],
  ['#areas', 'Áreas de atuação'],
  ['#atendimentos', 'Atendimentos'],
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#topo" className="header-logo">
          <img src={logo} alt="Dra. Andreza Gilio" />
        </a>
        <nav className="nav">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="pill pill-verde">Agendar consulta</a>
        </nav>
      </div>
    </header>
  );
}
