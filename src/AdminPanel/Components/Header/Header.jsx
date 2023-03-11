import React from 'react';
import { Grid } from '@mui/material';
import './HeaderStyles.css';
import MessageIcon from '@mui/icons-material/Message';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DashboardNav from '../Nav/DashboardNav';
import {Link} from 'react-router-dom'
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
                    <Grid item xs={10} sm={10} md={10} lg={10}>
                        <h1 className="db-heading">
                            N VISION DENTAL LABORATORY
                        </h1>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}>
                        <div className="icon-container">
                            <span className='icon'> <MessageIcon /></span>
                       <Link className='nav-link-db' to='/admin-dashboard/create-order'><span className='icon'> <AddBoxIcon /></span></Link>     
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default Header