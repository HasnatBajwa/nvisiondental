import React from 'react';
import { Grid } from '@mui/material';
import './HeaderStyles.css';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardNav from '../Nav/DashboardNav';
const Header = () => {
    return (
        <>
            <div className="db-header-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <div className="icon-container">
                            <DashboardNav />
                        </div>
                    </Grid>
                    <Grid xs={10} sm={10} md={10} lg={10}>
                        <h1 className="db-heading">
                            N VISION DENTAL LABORATORY
                        </h1>
                    </Grid>
                    <Grid xs={1} sm={1} md={1} lg={1}>
                        <div className="icon-container">
                            <span className='icon'> <MessageIcon /></span>
                            <span className='icon'> <AddBoxIcon /></span>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Header