
import './App.css';
import Landingpage from './Pages/LandingPage/Landingpage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 200,
      disable:'phone'
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Landingpage />} />
          <Route path='/contact-us' exact element={<ContactPage />} />
          <Route path='/about-us' exact element={<AboutPage />} />
          <Route path='/our-products' exact element={<ProductsPage />} />
          <Route path='/our-services' exact element={<ServicesPage />} />

        </Routes>
      </BrowserRouter>
      <Whatsapp />
    </>
  );
}

export default App;
