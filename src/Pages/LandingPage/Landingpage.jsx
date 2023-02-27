import React from 'react'
import Introduction from '../../Modules/Module 1/Introduction'
import ServicesModule from '../../Modules/Module 2/ServicesModule'
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header'
const Landingpage = () => {
    return (
        <>
            <Header />
            <Nav />
            <Introduction />
            <ServicesModule />
            {/* <Footer /> */}
        </>
    )
}

export default Landingpage