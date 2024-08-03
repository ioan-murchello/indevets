import './App.css'; 
import DoThis from './components/DoThis';
import Footer from './components/Footer';
import HowItWorks from './components/HowItWorks';
import Main from './components/Main';  
import Mision from './components/Mision';

function App() {
  return (
    <>
      <Main /> 
      <HowItWorks/>
      <Mision/>
      <DoThis/>
      <Footer/>
    </>
  );
}

export default App;
