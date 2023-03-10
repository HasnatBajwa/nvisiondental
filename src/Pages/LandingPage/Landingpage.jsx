import React from 'react'
import Introduction from '../../Modules/Module 1/Introduction'
import ServicesModule from '../../Modules/Module 2/ServicesModule'
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header'
import Products from '../../Modules/Module 3/Products';
import Experience from '../../Modules/Module 4/Experience';
import Clientale from '../../Modules/Module 5/Clientale';
import Vision from '../../Modules/Module 6/Vision';
import Footer from '../../Components/Footer/Footer';
import ClientReviews from '../../Modules/Module 7/ClientReviews';
import Whatsapp from '../../Components/Whatsapp/Whatsapp';

const Landingpage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Introduction />
            <ServicesModule />
            <Products />
            <Experience />
            <Clientale />
            <ClientReviews />
            <Vision />
            <Whatsapp />
            <Footer />
        </>
    )
}

export default Landingpage