import foto from '../assets/DSC00039-1.jpg';
import icone from '../assets/Group.svg';

const SELOS = [
  ['CRM-SP 129977', '#E3F1E7', '#1E8540'],
  ['Endocrinologia Pediátrica', '#E2EEF5', '#2B6E93'],
  ['RQE: 422561', '#FCE8EC', '#B24760'],
];

export default function Sobre() {
  return (
    <section id="sobre" className="container sobre">
      <div className="sobre-foto">
        <div className="deco" style={{ inset: '-18px 18px 18px -18px', background: '#F2B33D', borderRadius: 36 }} />
        <div className="deco" style={{ width: 90, height: 90, right: -20, top: 40, background: '#EE97A6', borderRadius: '50%' }} />
        <div className="deco" style={{ width: 56, height: 56, left: -34, bottom: 60, background: '#2B6E93', borderRadius: '50%' }} />
        <img src={foto} alt="Dra. Andreza Gilio" />
      </div>
      <div className="coluna">
        <img src={icone} alt="" className="sobre-icone" />
        <h2 className="h2" style={{ color: '#2B6E93' }}>Dra. Andreza Gilio</h2>
        <p className="texto">Médica, formada pela Faculdade de Medicina de Ribeirão Preto (USP), em 2007, com especialização em <strong>Endocrinologia Pediátrica</strong> pela Faculdade de Medicina de São Paulo (USP), com títulos de especialização da Sociedade Brasileira de Pediatria e da Sociedade Brasileira de Endocrinologia e Metabologia.</p>
        <p className="texto">Apaixonada pela saúde infantil, acredita que o desenvolvimento das crianças deve ser tratado com atenção e muito carinho, de forma a prezar pelo equilíbrio.</p>
        <p className="texto">Com mais de 14 anos de experiência em atendimento clínico, possui a competência necessária para cuidar da saúde de seu filho.</p>
        <div className="selos">
          {SELOS.map(([label, bg, fg]) => (
            <span key={label} className="selo" style={{ background: bg, color: fg }}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
