import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { Linksection } from './components/Linksection'
import { ParallaxSection } from './components/ParallaxSection'
import { Partners } from './components/Partners.js'

import supportData from './components/support.json'
import listenData from './components/listen.json'
import partnerData from './components/partner.json'

import { Linktree  } from './components/Linktree'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <ParallaxSection img='./assets/img/Varpsund2542_O.webp' />
      {/* <Linksection title="Stöd podden." data={supportData}/> */}
      {/* <Linksection title="Lyssna på podden." data={listenData}/> */}
      <Linktree title="Stöd podden." data={supportData} />
      <Linktree title="Lyssna på podden." data={listenData} />
      <Partners title="Partners." data={partnerData} />
      <ParallaxSection img='./assets/img/_MGF2156_L.webp' />
      <Contact />
    </>
  );
}
export default App;
