import React from 'react'
import './AboutPageStyles.css'
import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { Grid } from '@mui/material';
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
import { Link } from 'react-router-dom';
import Whatsapp from '../../Components/Whatsapp/Whatsapp';

const AboutPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="about-page-container">
                <div className="top-title-container">
                    <h3 className="title-heading">
                        Know More About Us
                    </h3>
                    <h1 className="about-us-heading">
                        About Us...
                    </h1>
                </div>
                <div className="about-txt-container">
                    <h1 className="about-heading">
                        <span className="title-gradient">
                            N VISION DENTAL
                        </span>
                        &nbsp;<span className='heading-txt'></span> laboratories manufacture or customize a variety of products to assist in the provision of oral health care by a licensed dentist.
                    </h1>
                    <p className="about-txt">
                        <span className="title-gradient"> N VISION DENTAL</span>   Lab has maintained superior standards of quality and service from the very beginning.
                        Being family owned and operated means that we are able to maintain an environment of absolute honesty and remain sensitive to the needs of each individual dentist.
                        <br />
                        At  <span className="title-gradient"> N VISION DENTAL</span>  Each case is handled with a team mentality where the dentist is part of the team able at all times to express their specific requirements.
                        We stress this continuous communication with each individual dental practice.

                        Our high standard of quality means that we use the latest materials and systems in ceramics and porcelain fused to metal.
                    </p>
                </div>
                <HeadingTitle name={" OUR COMMITMENTS "} />
                <div className="about-card-container">
                    <Grid container justifyContent={'center'} spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div data-aos='fade-up' className="about-card">
                                <h2 className="commitment-heading">
                                    <span className="title-gradient">
                                        QUALITY
                                    </span>
                                </h2>
                                <div className="commitment-txt">
                                    Our Commitment to Quality is Execptional. Being a Family Owned Business We Value Quality Over Quantity
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div data-aos='fade-up' className="about-card">
                                <h2 className="commitment-heading">
                                    <span className="title-gradient">
                                        PUNCTUALITY
                                    </span>
                                </h2>
                                <div className="commitment-txt">
                                    We Know the Value Of Time.
                                    In Order to Provide You a Seemless Experience we are Committed to Timely Deliveries So That Your Patients Don't have to Wait For the Smile They Deserve.
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                            <div data-aos='fade-up' className="about-card">
                                <h2 className="commitment-heading">
                                    <span className="title-gradient">
                                        CUSTOMIZATION
                                    </span>
                                </h2>
                                <div className="commitment-txt">
                                    We Customize Every Project According Your Exact Requirements So that Your Client Always Rely Upon You Like You Rely Upon Us.
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className="learn-more-container">
                    <HeadingTitle name={" LEARN MORE "} />
                    <div className="learn-more">
                        <h1 className="learn-more-heading">
                            Want To Hear More About Us?
                        </h1>
                        <h3 className="learn-more-heading">
                            Let's Get In Touch
                        </h3>
                    </div>
                    <Link to='/contact-us'>
                        <button className='learn-more-btn'>CONTACT US</button>
                    </Link>
                </div>
            </div>
            <Whatsapp />
            <Footer />
        </>
    )
}

export default AboutPage