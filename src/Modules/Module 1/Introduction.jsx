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
                        <h5 data-aos='fade-in' className="intro-heading-1">
                               Top Rated Dental Laboratory
                            </h5>
                            <h1 data-aos='fade-in' className="intro-heading">
                                Welcome To The <span className="title">N VISION DENTAL </span> Laboratory!
                            </h1>
                            <p data-aos='fade-in' className="intro-txt">
                           <span className="title">N VISION DENTAL LABORATORY</span> provides a variety of products and services such as all ceramics, implants, and veneers. 
                            We specialize in beautiful full mouth reconstruction cases.
                            Our team is highly educated and constantly up to date with the advancements in dental artistry, product materials, and digital dentistry. Hex dental lab’s attention to detail comes close to none. 
                            Designing each case with the individual attention it requires. 
                            Every step of the fabrication process follows a strict gold standard from start to finish.
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