import React from 'react'
import Introduction from '../../Modules/Module 1/Introduction'
import ServicesModule from '../../Modules/Module 2/ServicesModule'
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header'
import Products from '../../Modules/Module 3/Products';
import Experience from '../../Modules/Module 4/Experience';

const Landingpage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Introduction />
            <ServicesModule />
            <Products />
            <Experience />
            {/* <Footer /> */}
        </>
    )
}

export default Landingpage