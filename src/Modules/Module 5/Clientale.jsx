import React from 'react'
import { Grid } from '@mui/material'
import './ClientaleStyles.css'

const Clientale = () => {
    return (
        <>
            <div className="clientale-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <div className="clientale-txt-container">
                            <h1 className="clientale-heading">
                                Our Laboratory Facts
                            </h1>
                            <p className="clientale-txt">
                                <span className="title">N VISION DENTAL</span> is an industry leading provider of high quality dental laboratory products
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h1 className="clientale-heading">
                            15+
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Years Experience</span>
                        </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h1 className="clientale-heading">
                            25K +
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Happy Clients</span>
                        </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h1 className="clientale-heading">
                            100%
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Client Satisfaction</span>
                        </p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Clientale