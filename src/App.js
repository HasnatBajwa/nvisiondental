
import './App.css';
import Landingpage from './Pages/LandingPage/Landingpage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 200,
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/contact-us' exact element={<ContactPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
