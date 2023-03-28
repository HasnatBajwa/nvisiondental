import React from 'react';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import './HeaderStyles.css'

const Header = () => {
    return (
        <>
            <div className="header-container">
                <Grid container>
                    <Grid item xs={9} sm={9} md={9} lg={11}>
                        <div className="social-media-icon-container">
                            <FacebookIcon className='social-media-icons' />
                            <InstagramIcon className='social-media-icons' />
                            <YouTubeIcon className='social-media-icons' />
                        </div>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={1}>
                        <div className="auth-container">
                            <Link className='auth-link' to='admin-dashboard'><span className="auth-txt">LOGIN</span></Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Header