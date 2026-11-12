import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Faixas from './components/Faixas.jsx';
import Sobre from './components/Sobre.jsx';
import CtaBar from './components/CtaBar.jsx';
import Especialidade from './components/Especialidade.jsx';
import Areas from './components/Areas.jsx';
import Atendimentos from './components/Atendimentos.jsx';
import Contato from './components/Contato.jsx';
import Footer from './components/Footer.jsx';

export default function App({ heroInterval = 3, showGallery = true }) {
  return (
    <>
      <Header />
      <main>
        <Hero interval={heroInterval} />
        <Faixas />
        <Sobre />
        <CtaBar />
        <Especialidade />
        <Areas />
        <Atendimentos showGallery={showGallery} />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
