import './App.css';
import Header  from './features/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { About } from './features/About/About';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';

function App() {
  return (
    <div>
    <div>  
      <Header />
  </div>
  <div>     
    <Routes>
        <Route path="/About" element={ <About /> } />
        <Route path="/Projects" element={ <Projects /> } />
        <Route path="/Contact" element={ <Contact /> } />
    </Routes>
  </div> 
  </div> 

  );
}

export default App;
