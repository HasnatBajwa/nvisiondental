
import './App.css';
import Landingpage from './Pages/LandingPage/Landingpage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration:1500,
      delay:1500,
    })
  }, [])
  
  return (
    <>
      <Landingpage />
    </>
  );
}

export default App;
