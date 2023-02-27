import React from 'react';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './HeaderStyles.css'

const Header = () => {
    return (
        <>
            <div className="header-container">
                <Grid container>
                    <Grid item xs={9} sm={9} md={9} lg={9}>
                        <div className="social-media-icon-container">
                            <FacebookIcon className='social-media-icons' />
                            <TwitterIcon className='social-media-icons' />
                            <WhatsAppIcon className='social-media-icons' />
                            <InstagramIcon className='social-media-icons' />
                            <YouTubeIcon className='social-media-icons' />
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3}>
                        <div className="auth-container">
                            <p> <span className="auth-txt">Login</span>|<span className="auth-txt">Register</span></p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Header