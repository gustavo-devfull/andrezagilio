const FAIXAS = [
  ['Crescimento', '#1E8540', '#fff'],
  ['Puberdade', '#2B6E93', '#fff'],
  ['Diabetes', '#F2B33D', '#1E2A3A'],
  ['Tireoide', '#EE97A6', '#1E2A3A'],
];

export default function Faixas() {
  return (
    <div className="faixas">
      {FAIXAS.map(([label, bg, fg]) => (
        <div key={label} className="faixa" style={{ background: bg, color: fg }}>{label}</div>
      ))}
    </div>
  );
}
