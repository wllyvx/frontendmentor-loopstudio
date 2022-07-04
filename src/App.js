import Header from '../src/components/Header';
import './App.css';
import About from './components/About';
import Creations from './components/Creations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Creations />
      <Footer />
    </div>
  );
}

export default App;
