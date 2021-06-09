import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'
import { Support } from './components/Support'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <Support />
      <Contact />
    </>
  );
}

export default App;
