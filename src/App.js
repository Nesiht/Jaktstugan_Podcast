import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { Linksection } from './components/Linksection'

import supportData from './components/support.json'
import listenData from './components/listen.json'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <Linksection title="Stöd podden." data={supportData}/>
      <Linksection title="Lyssna på podden." data={listenData}/>
      <Contact />
    </>
  );
}

export default App;
