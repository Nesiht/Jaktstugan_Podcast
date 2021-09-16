import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { Linksection } from './components/Linksection'
import { ParallaxSection } from './components/ParallaxSection'

import supportData from './components/support.json'
import listenData from './components/listen.json'
import partnerData from './components/partner.json'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <ParallaxSection img='./assets/img/nature_2.jpg' />
      <Linksection title="Stöd podden." data={supportData}/>
      <Linksection title="Lyssna på podden." data={listenData}/>
      <Linksection title="Partners." data={partnerData}/>
      <ParallaxSection img='./assets/img/nature_4.jpg' />
      <Contact />
    </>
  );
}

export default App;
