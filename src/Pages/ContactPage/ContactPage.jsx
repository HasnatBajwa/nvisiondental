import React from 'react'
import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import { Grid } from '@mui/material'
import './ContactPageStyles.css'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="contact-page-container">
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="contact-page-header">
                            <h2 className="contact-txt">
                                Need Assistance
                            </h2>
                            <h1 className="contact-heading">
                                Contact Us...
                            </h1>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="user-input-container">
                <Grid container justifyContent={'center'} columnSpacing={6}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <div className="contact-txt-container">
                            <h1 className="contact-head">
                                Drop a Message
                            </h1>
                            <p className="contact-text">
                                We Would Love To Hear From You
                            </p>
                        </div>
                        <p className="input-title">Full Name:</p>
                        <input type="text" className="user-details" />
                        <p className="input-title">Email Address:</p>
                        <input type="text" className="user-details" />
                        <p className="input-title">Phone Number:</p>
                        <input type="text" className="user-details" />
                        <p className="input-title">Message:</p>
                        <textarea name="" id="" cols="30" rows="10" className="user-msg"></textarea>
                        <button className='get-details'>Send us a Message</button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <h1 className="contact-head">
                            Get In Touch
                        </h1>
                        <div className="contact-details-container">
                            <HomeIcon className='contact-icons' />
                            <span className="contact-details">
                                P-369 Street-2 ,Block B Al Najaf Colony
                                38000 Faisalabad, Pakistan
                            </span>
                        </div>
                        <div className="contact-details-container">
                            <EmailIcon sx={{ fontSize: '20px' }} />
                            <span className="contact-details">
                                info@nvisiondental.com
                            </span>
                        </div>
                        <div className="contact-details-container">
                            <PhoneIcon className='contact-icons' />
                            <span className="contact-details">
                                +92-300-4601314
                                &nbsp; | &nbsp;
                                +92-333-4601314
                                &nbsp; | &nbsp;
                                +92-41-8555333
                            </span>
                        </div>

                    </Grid>
                </Grid>
            </div>

            <Footer />
        </>
    )
}

export default ContactPage