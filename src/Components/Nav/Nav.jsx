import React from 'react';
import { Grid } from '@mui/material';
import './NavStyles.css'
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <div className="logo-container">
              <Link className='nav-link' to='/'><img src={Logo} alt="Company-logo" className="company-logo" /></Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} >
            <div className="nav-link-container">
              <Link className='nav-link' to='/'><span className="nav-links">Home</span></Link>
              <Link className='nav-link' to='our-products'> <span className="nav-links">Products</span> </Link>
              <span className="nav-links">Services</span>
              <Link className='nav-link' to='/about-us'> <span className="nav-links">About Us</span></Link>
              <Link className='nav-link' to='/contact-us'><span className="nav-links">Contact Us</span></Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Nav