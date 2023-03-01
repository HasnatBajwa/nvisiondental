import React from 'react';
import './ServicesModuleStyles.css'
import { Grid } from '@mui/material'
import Tooth from '../../Assets/tooth.png'
import Teeth from '../../Assets/teeth.png'

const ServicesModule = () => {
    return (
        <>
            <div className="services-module-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <img src={Teeth} alt="Teeth" className="service-img" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <h3 className="service-heading">
                                    ALIGNERS
                                </h3>
                                <p className="service-txt">
                                    Aligners are the closest you can get to healthy, beautiful and natural teeth.
                                </p>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <img src={Tooth} alt="Teeth" className="service-img" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <h3 className="service-heading">
                                    DENTAL IMPLANTS
                                </h3>
                                <p className="service-txt">
                                    Dental implants are the closest you can get to healthy, beautiful and natural teeth.
                                </p>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Grid container justifyContent={'center'}>
                            <Grid item xs={6} sm={6} md={2} lg={2}>
                                <img src={Teeth} alt="Teeth" className="service-img" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <h3 className="service-heading">
                                    BRIDGES & CROWNS
                                </h3>
                                <p className="service-txt">
                                   Bridges & crowns are the closest you can get to healthy, beautiful and natural teeth.
                                </p>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default ServicesModule