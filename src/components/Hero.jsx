import { useCallback, useEffect, useRef, useState } from 'react';
import { SLIDES } from '../data.js';

export default function Hero({ interval = 3 }) {
  const [i, setI] = useState(0);
  const timer = useRef();

  const start = useCallback(() => {
    clearInterval(timer.current);
    const ms = interval * 1000;
    if (ms > 0) timer.current = setInterval(() => setI(n => (n + 1) % SLIDES.length), ms);
  }, [interval]);

  useEffect(() => {
    start();
    return () => clearInterval(timer.current);
  }, [start]);

  const select = k => { setI(k); start(); };
  const atual = SLIDES[i];

  return (
    <section id="topo" className="hero" style={{ background: atual.bg }}>
      <div className="hero-media">
        {SLIDES.map((s, k) => (
          <img key={s.q} src={s.img} alt="" style={{ opacity: k === i ? 1 : 0 }} />
        ))}
      </div>
      <div className="hero-content">
        <div className="hero-text" style={{ color: atual.fg }}>
          <div className="hero-perguntas">
            {SLIDES.map((s, k) => (
              <button key={s.q} className="unset hero-pergunta" style={{ opacity: k === i ? 1 : 0.4 }} onClick={() => select(k)}>
                {s.q}
              </button>
            ))}
          </div>
          <h1 className="hero-titulo">O que fazer?</h1>
          <a href="#areas" className="pill hero-cta">Clique aqui</a>
        </div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((s, k) => (
          <button key={s.q} aria-label={s.q} className="unset hero-dot" style={{ width: k === i ? 34 : 10 }} onClick={() => select(k)} />
        ))}
      </div>
    </section>
  );
}
