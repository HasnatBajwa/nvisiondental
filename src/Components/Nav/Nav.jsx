import React from 'react';
import { Grid } from '@mui/material';
import './NavStyles.css'
import Logo from '../../Assets/Logo.png'
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <Grid container justifyContent={'center'}>
          <Grid item xs={12} sm={12} md={12} lg={5}>
            <div className="logo-container">
              <img src={Logo} alt="Company-logo" className="company-logo" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} >
            <div className="nav-link-container">
              <span className="nav-links">Home</span>
              <span className="nav-links">Products</span>
              <span className="nav-links">Services</span>
              <span className="nav-links">About Us</span>
              <span className="nav-links">Contact Us</span>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Nav