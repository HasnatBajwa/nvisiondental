import React from 'react'
import './ProductsPageStyles.css'
import Header from '../../Components/Header/Header';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer'
import { Grid } from '@mui/material';
import HeadterTitle from '../../Components/HeadingTitle/HeadingTitle'
import Aligners from '../../Assets/aligners.jpg'
import Aligners2 from '../../Assets/aligners2.jpg'
import Implants from '../../Assets/implants.jpg'
import Crowns from '../../Assets/bridge.jpg'
import Bridges from '../../Assets/crown.jpg'
import Implants2 from '../../Assets/implants2.webp'
import Laminates from '../../Assets/laminates.avif'
import Laminates2 from '../../Assets/laminates2.webp'
import { Link } from 'react-router-dom'
import Whatsapp from '../../Components/Whatsapp/Whatsapp';

const ProductsPage = () => {
    return (
        <>
            <Header />
            <Nav />
            <div className="products-page-page-container">
                <div className="product-page-title-container">
                    <h3 className="product-page-title">
                        Get a Close Review
                    </h3>
                    <h1 className="product-page-heading">
                        OUR PRODUCTS...
                    </h1>

                </div>
                {/* Aligners Container */}
                <h1 className="product-desc-heading">
                    INTRODUCING
                </h1>
                <div data-aos='fade-up' className="products-page-container">
                    <Grid container justifyContent={'center'} spacing={6}>
                        <HeadterTitle name={" ALIGNERS "} />
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <div className="product-desc-container">
                                <h2 className="product-desc-title">
                                    Aligners
                                </h2>
                                <p className="product-desc-txt">
                                    <span className="title-gradient">Aligners</span> are orthodontic devices based on a series of transparent aligner to realign the patient’s teeth as an alternative to wires and brackets as in regular dental braces.
                                </p>
                                <p className="product-desc">
                                    Aligner technology is an alternative to orthodontic braces. N VISION ALIGN is one example of this technology.

                                    It uses thin, transparent plastic shells to move teeth in small increments when worn consistently.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Aligners} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Aligners2} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* Dental Implants */}
                <div data-aos='fade-up' className="products-page-container">
                    <Grid container justifyContent={'center'} spacing={6}>
                        <HeadterTitle name={" DENTAL IMPLANTS "} />
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <div className="product-desc-container">
                                <h2 className="product-desc-title">
                                    Dental Implants
                                </h2>
                                <p className="product-desc-txt">
                                    <span className="title-gradient">Dental Implants</span> are medical devices surgically implanted into the jaw to restore a person's ability to chew or their appearance. They provide support for artificial teeth, such as crowns, bridges, or dentures.
                                </p>
                                <p className="product-desc">
                                    Dental implant systems consist of a dental implant body and dental implant abutment and may also include an abutment fixation screw.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Implants} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Implants2} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* Crowns & Bridges */}
                <div data-aos='fade-up' className="products-page-container">
                    <Grid container justifyContent={'center'} spacing={6}>
                        <HeadterTitle name={" CROWNS & BRIDGES "} />
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <div className="product-desc-container">
                                <h2 className="product-desc-title">
                                    Crowns & Bridges
                                </h2>
                                <p className="product-desc-txt">
                                    <span className="title-gradient">Crowns & Bridges</span>  are dental restorations that covers the exposed surface of a tooth to strengthen it or improve its appearance.
                                </p>
                                <p className="product-desc">
                                    A bridge is a dental restoration to replace one or more missing teeth. It includes an artificial tooth or teeth which are fused to crowns on either side to provide support.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Crowns} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Bridges} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
                {/* Laminated*/}
                <div data-aos='fade-up' className="products-page-container">
                    <Grid container justifyContent={'center'} spacing={6}>
                        <HeadterTitle name={" LAMINATES "} />
                        <Grid xs={12} sm={12} md={12} lg={12}>
                            <div className="product-desc-container">
                                <h2 className="product-desc-title">
                                    Laminates
                                </h2>
                                <p className="product-desc-txt">
                                    <span className="title-gradient">Laminates</span> are thin layers of porcelain material (although other material options may be available).
                                </p>
                                <p className="product-desc">
                                    Laminates are most commonly applied to the visible surface of front teeth to restore the appearance of each tooth and protect teeth from further harm or staining.
                                </p>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Laminates} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6}>
                            <div className="product-desc-card">
                                <img src={Laminates2} alt="" className="product-desc-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>

            <div className="end-product-page">
                <h1 className="end-product-heading">
                    Need More Information?
                </h1>
                <Link to='/contact-us'>
                    <button className='info-btn'>Get Qoute</button>
                </Link>
            </div>
            <Whatsapp />
            <Footer />
        </>
    )
}

export default ProductsPage