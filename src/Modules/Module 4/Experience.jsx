import React from 'react'
import { Grid } from '@mui/material'
import './ExperienceStyles.css'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
const Experience = () => {
    return (
        <>
            <div className="experience-container">

                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <HeadingTitle name={"Get To Know Us"} />
                        <div data-aos='fade-up' className="experience-txt-container">
                            <h1 className="experience-heading">
                                10+ Years of Quality Service in <span className="title-gradient">Dental Laboratory</span>
                            </h1>
                            <p className="experience-txt">
                                <span className="title-gradient">N VISION DENTAL</span>  is an industry leading provider of high-quality dentallaboratory products and services to dental professionals.
                            </p>
                            <p className="experience-txt">
                                We have embraced and utilized the latest advances in dental materials, techniques, and technology.
                                Establishing it to be as a Premier Laboratory for the finest full-service solution for all your dental needs.
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Experience