import React from 'react'
import { Grid } from '@mui/material'
import './ClientaleStyles.css'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle';
const Clientale = () => {
    return (
        <>
            <div className="clientale-container">
                <HeadingTitle name={"Our Facts"} />
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
                            70+
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Dentists</span>
                        </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h1 className="clientale-heading">
                            50 +
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Clinics</span>
                        </p>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <h1 className="clientale-heading">
                            1000 +
                        </h1>
                        <p className="clientale-txt">
                            <span className="clientale-title">Cases</span>
                        </p>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Clientale