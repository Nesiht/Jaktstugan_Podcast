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

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <ParallaxSection img='./assets/img/_MGF2170_M.webp' />
      <Linksection title="Stöd podden." data={supportData}/>
      <Linksection title="Lyssna på podden." data={listenData}/>
      {/* <Linksection title="Partners." data={partnerData}/> */}
      <Partners title="Partners." data={partnerData} />
      <ParallaxSection img='./assets/img/_MGF2188_M.webp' />
      <Contact />
    </>
  );
}
export default App;
