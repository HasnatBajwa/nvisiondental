import React from 'react'
import { Grid } from '@mui/material'
import './VisionStyles.css'

const Vision = () => {
    return (
        <>
            <div className="vision-container">
                <Grid container justifyContent={'center'} spacing={3}>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div className="vision-card">
                            <h1 className="vision-title">
                                OUR VISSION
                            </h1>
                            <p className="vision-txt">
                                <span className="title">N VISION DENTAL</span> is 
                                an industry leading provider of high-quality dental laboratory products and services to dental professionals world-wide.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6}>
                        <div className="mission-card">
                        <h1 className="vision-title">
                                OUR MISSION
                            </h1>
                            <p className="vision-txt">
                                <span className="title">Our Mission</span> is 
                               to assist you in progressing to digital dentistry and move with the future of dentistry and increase business over the globe
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}

export default Vision