
import './App.css';
import Landingpage from './Pages/LandingPage/Landingpage';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from './Pages/ContactPage/ContactPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import Dashboard from './AdminPanel/Pages/Dashboard/DashBoard'
import Orders from './AdminPanel/Pages/Orders/Orders';
import LabSlip from './AdminPanel/Modules/LabSlip/LabSlip';
import AddProducts from './AdminPanel/Modules/AddProducts/AddProducts';
import CreateInvoice from './AdminPanel/Modules/CreateInvoice/CreateInvoice';
import AddClients from './AdminPanel/Modules/AddClients/AddClients';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      delay: 200,
      disable: 'phone'
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
          <Route path='/register' exact element={<RegistrationPage />} />
          <Route path='/admin-dashboard' exact element={<Dashboard />} />
          <Route path='/admin-dashboard/create-order' exact element={<Orders />} />
          <Route path='/admin-dashboard/lab-slip' exact element={<LabSlip />} />
          <Route path='/admin-dashboard/add-products' exact element={<AddProducts />} />
          <Route path='/admin-dashboard/create-invoice' exact element={<CreateInvoice />} />
          <Route path='/admin-dashboard/add-client' exact element={<AddClients />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
