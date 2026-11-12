import foto from '../assets/MG_7802-768x512-1.jpg';

export default function Especialidade() {
  return (
    <section id="especialidade" className="container especialidade">
      <div className="coluna">
        <span className="tag">Especialidade</span>
        <h2 className="h2" style={{ color: '#1E8540' }}>Sobre a Endocrinologia Pediátrica</h2>
        <p className="especialidade-lead">Especialidade da Medicina dedicada ao cuidado da saúde de bebês, crianças, pré-adolescentes e adolescentes.</p>
        <p className="especialidade-texto">A endocrinologia pediátrica é uma especialidade médica que se dedica ao diagnóstico e tratamento de distúrbios hormonais em crianças. Esses distúrbios podem afetar o crescimento, desenvolvimento, metabolismo e reprodução das crianças. Algumas condições comuns tratadas pelos endocrinologistas pediátricos incluem <strong>diabetes, distúrbios de crescimento, puberdade precoce ou tardia e distúrbios da tireoide</strong>.</p>
        <p className="especialidade-texto">O objetivo é garantir o equilíbrio hormonal adequado para um crescimento saudável. É fundamental procurar um endocrinologista pediátrico se houver suspeita de problemas hormonais em crianças, para um diagnóstico preciso e plano de tratamento adequado. A colaboração com outras especialidades médicas é essencial para oferecer cuidados abrangentes às crianças.</p>
      </div>
      <div className="especialidade-foto">
        <div className="deco" style={{ inset: '18px -18px -18px 18px', background: '#1E8540', borderRadius: 36 }} />
        <img src={foto} alt="Consultório infantil" />
      </div>
    </section>
  );
}
