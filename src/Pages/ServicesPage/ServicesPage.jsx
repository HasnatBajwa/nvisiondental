import React from 'react'
import Nav from '../../Components/Nav/Nav';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Grid } from '@mui/material';
import './ServicesPageStyles.css';
import CAD from '../../Assets/cad.jpg'
import DI from '../../Assets/digital-impression.jpg'
import { Link } from 'react-router-dom';
import Whatsapp from '../../Components/Whatsapp/Whatsapp';

const ServicesPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="services-page-container">
                <div className="service-page-title-container">
                    <h3 className="service-title">
                        Explore Some of
                    </h3>
                    <h1 className="services-heading">
                        OUR SERVICES...
                    </h1>
                </div>
                <div className="service-data">
                    <Grid container justifyContent={'center'}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="services-data-container">
                                <h2 className="service-data-heading">
                                    <span className="title-gradient">CAD & CAM</span>
                                </h2>
                                <p className="services-data-txt">
                                    <span className="title-gradient">N VISION DENTAL</span>  is providing a wide range of products is available in crown & bridge, implants, prosthetics
                                    and orthodontics with many restorations being CAD/CAM milled or 3D printed once the case has been scanned, designed and approved.
                                </p>
                                <img src={CAD} alt="" className="services-img" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <div className="services-data-container">
                                <h2 className="service-data-heading">
                                    <span className="title-gradient">DIGITAL IMPRESSIONS</span>
                                </h2>
                                <p className="services-data-txt">
                                    <span className="title-gradient">N VISION DENTAL</span>  is providing an amazing facillity of taking digital impressions of the client to make sure the client gets the perfect measurements.
                                    So that the quality of the restorations made is exceptional.
                                </p>
                                <img src={DI} alt="" className="services-img" />

                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="end-services">
                    <h1 className="end-service-title">
                        NEED TO KNOW MORE?
                    </h1>
                    <Link to='/contact-us'><button className='info-btn'> Get Info </button></Link>
                </div>
            </div>
            <Whatsapp />
            <Footer />
        </>
    )
}

export default ServicesPage