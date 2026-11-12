import { useState } from 'react';
import calendario from '../assets/Calendar.svg';
import relogio from '../assets/Clock-1-1.svg';
import { WHATSAPP } from '../data.js';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  // Igual ao original: apenas mostra a confirmação, sem enviar para nenhum servidor.
  const submit = e => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="contato">
      <div className="container contato-inner">
        <div className="coluna">
          <h2 className="h2">Envie sua mensagem</h2>
          {enviado ? (
            <div className="enviado">Mensagem enviada! Em breve entraremos em contato.</div>
          ) : (
            <form className="form" onSubmit={submit}>
              <input required name="nome" placeholder="Nome" />
              <input required name="email" type="email" placeholder="E-mail" />
              <textarea required name="mensagem" rows={4} placeholder="Mensagem" />
              <button type="submit" className="unset form-enviar">ENVIAR</button>
            </form>
          )}
        </div>
        <div className="marque">
          <div className="marque-icones">
            <img src={calendario} alt="" />
            <img src={relogio} alt="" />
          </div>
          <p>Marque uma consulta com a Dra. Andreza Gilio</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="pill pill-escuro">Clique aqui</a>
        </div>
      </div>
    </section>
  );
}
