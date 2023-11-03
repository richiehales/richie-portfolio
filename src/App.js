import { Header } from './features/Header/Header';
import { Routes, Route } from 'react-router-dom';
import { About } from './features/About/About';
import { Projects } from './features/Projects/Projects';
import { Contact } from './features/Contact/Contact';
import { Footer } from './features/Footer/Footer'
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#253439'
    },
    secondary: {
      main: '#ffff'
    },
  }
})


export function App() {
  return (
    <ThemeProvider theme={theme}>       
      <Header />   
      <Routes>
        <Route path="/" element={ <About /> } />
        <Route path="/Projects" element={ <Projects /> } />
        <Route path="/Contact" element={ <Contact /> } />
      </Routes>
      <Footer />      
    </ThemeProvider>
  );
}


