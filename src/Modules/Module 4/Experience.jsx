import React from 'react'
import { Grid } from '@mui/material'
import './ExperienceStyles.css'
import Dental from '../../Assets/dental.jpg'
const Experience = () => {
    return (
        <>
            <div className="experience-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={6} sm={6} md={6} lg={8}>
                        <div data-aos='fade-right' className="experience-txt-container">
                            <h1 className="experience-heading">
                                15+ Years of Quality Service in <span className="title">Dental Laboratory</span>
                            </h1>
                            <p className="experience-txt">
                                <span className="title">N VISION DENTAL</span>  is an industry leading provider of high-quality dentallaboratory products and services to dental professionals.
                            </p>
                            <p className="experience-txt">
                                We have embraced and utilized the latest advances in dental materials, techniques, and technology.
                                Establishing it to be as a Premier Laboratory for the finest full-service solution for all your dental needs.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={4}>
                            <img data-aos='fade-left' src={Dental} alt="" className="experience-img" />
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Experience