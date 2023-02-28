import React from 'react'
import { Grid } from '@mui/material'
import './ProductsStyles.css';
import Aligners from '../../Assets/Aligners-Icon.png'
import Crown from '../../Assets/Crown-Icon.png'
import Digital from '../../Assets/Digital-Icon.png'
import Implants from '../../Assets/Implants-Icon.png'
import Laminates from '../../Assets/Laminates-Icon.png'
import Prosthetics from '../../Assets/Prosthetics-Icon.png'
const Products = () => {
    return (
        <>
            <div className="products-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Aligners} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Aligners
                        </h3>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Crown} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Crowns & Bridges
                        </h3>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Digital} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Digital
                        </h3>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Implants} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Implants
                        </h3>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Laminates} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Laminates
                        </h3>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1} lg={1}>
                        <img data-aos="fade-down" src={Prosthetics} alt="Aligners" className="product-img" />
                        <h3 data-aos="fade-down" className="product-title">
                            Prosthetics
                        </h3>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Products