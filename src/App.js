import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { Support } from './components/Support'
import { Listen } from './components/Listen'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <Support />
      <Listen />
      <Contact />
    </>
  );
}

export default App;
