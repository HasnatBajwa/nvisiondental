import React from 'react';
import './ServicesModuleStyles.css'
import { Grid } from '@mui/material'

const ServicesModule = () => {
    return (
        <>
            <div className="services-module-container">
                <Grid container justifyContent={'center'}>
                    <Grid>hello</Grid>
                    <Grid>world</Grid>
                    <Grid>hi there</Grid>
                </Grid>
            </div>
        </>
    )
}

export default ServicesModule