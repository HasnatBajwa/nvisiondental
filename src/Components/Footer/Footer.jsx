import React from 'react'
import { Grid } from '@mui/material'
import './FooterStyles.css'
import Icon from '../../Assets/Icon.png'
const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <img src={Icon} alt="" className='footer-icon' />
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <h3 className="footer-title">
                            Contact Us
                        </h3>
                        <p className="footer-txt">
                            0311-26*****  <br />
                            041-26******
                        </p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <h3 className="footer-title">
                            Location
                        </h3>
                        <p className="footer-txt">
                            38000 Faisalabad,<br /> Punjab Pakistan
                        </p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <h3 className="footer-title">
                            Services
                        </h3>
                        <p className="footer-txt">
                            Implants <br />
                            Bridge & Crown <br />
                            Digital <br />
                            Aligners <br />
                            Laminates <br />
                            Prosthetics
                        </p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <h3 className="footer-title">
                            Resources
                        </h3>
                        <p className="footer-txt">
                            Help Center <br />
                            Site Map
                        </p>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}>
                        <h3 className="footer-title">
                            Products
                        </h3>
                        <p className="footer-txt">
                            Gallery
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div className="end-footer-container">
                <p className="end-footer-txt">
                    <span className="title">N VISION DENTAL .PVT LTD</span>
                    <span className="end-footer">2023 &copy; Copy Right Registered | ALL RIGHTS RESERVED</span>
                </p>
            </div>
        </>
    )
}

export default Footer