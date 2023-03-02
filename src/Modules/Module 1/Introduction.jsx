import React from 'react'
import './IntroductionStyles.css'
import { Grid } from '@mui/material';
import Intro from '../../Assets/Intro.avif'
const Introduction = () => {
    return (
        <>
            <div className="introduction-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="intro-txt-container">
                            <h1 data-aos='fade-in' className="intro-heading">
                                Welcome To The <span className="title">N VISION DENTAL </span> Laboratory!
                            </h1>
                            <p data-aos='fade-in' className="intro-txt">
                                We are a fully digital dental laboratory. <span className="title">N VISION DENTAL </span> 
                                is a full service PRIVATE LAB specializing in implants, Crown & Bridge, All ceramic, Aligners, etc.
                            </p>
                        </div>
                    </Grid>
                    {/* <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img src={Intro} alt="Intro" className="intro-img" />
                    </Grid> */}
                </Grid>
            </div>
        </>
    )
}

export default Introduction