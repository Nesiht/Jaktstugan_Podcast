import './App.css';
import { Header } from './components/Header'
import { Author } from './components/Author'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <>
      <Header />
      <Author />
      <Contact />
    </>
  );
}

export default App;
