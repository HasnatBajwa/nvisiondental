import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '../../../Assets/Icon.png'
import { Drawer } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './DashboardNavStyles.css'
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
const DashboardNav = () => {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    // To Open Orders Menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // To Open Profile Menu
    const [anchorE2, setAnchorE2] = React.useState(null);
    const openProfile = Boolean(anchorE2);
    const handleClickProfile = (event) => {
        setAnchorE2(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setAnchorE2(null);
    };
    return (
        <>
            <div className="dashboard-nav-container">
                <MenuIcon className='icon' onClick={handleDrawerOpen} />

                <Drawer
                    anchor="bottom"
                    onClose={handleDrawerClose}
                    open={open}
                    PaperProps={{ style: { width: '50%', height:'800px' } }}
                    variant='temporary'
                >
                    <div className="dashboard-nav">
                        <img src={Icon} alt="icon" className='db-icon' />
                        <hr />
                        <div className="dashboard-menu-container">
                            <div className="dashboard-menu">
                                <button className='dashboard-menu-btn'>
                                <Link className='nav-link' to='/admin-dashboard'><GridViewIcon /> <span className="menu-txt">DASHBOARD</span></Link>    
                                </button>
                            </div>
                            <div className="dashboard-menu">
                                <button
                                    className='dashboard-menu-btn'
                                    aria-controls={openMenu ? 'demo-positioned-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openMenu ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <PeopleAltIcon />
                                    <span className="menu-txt">ORDERS</span>
                                </button>
                                <Menu
                                    id="demo-positioned-menu"
                                    aria-labelledby="demo-positioned-button"
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>All Orders</MenuItem>
                                    <MenuItem onClick={handleClose}>Search Orders</MenuItem>
                                </Menu>
                            </div>
                            <div className="dashboard-menu">
                                <button className='dashboard-menu-btn'>
                                    <AccountBalanceWalletIcon /> <span className="menu-txt">ACCOUNTING</span>
                                </button>
                            </div>
                            <div className="dashboard-menu">
                                <button className='dashboard-menu-btn'>
                                    <LocalShippingIcon /> <span className="menu-txt">SHIPPING</span>
                                </button>
                            </div>
                            <div className="bottom-menu">
                                <div className="dashboard-menu">
                                    <button
                                        className='dashboard-menu-btn'
                                        aria-controls={openProfile ? 'demo-positioned-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openProfile ? 'true' : undefined}
                                        onClick={handleClickProfile}
                                    >
                                        <AccountCircleIcon />
                                        <span className="menu-txt">PROFILE</span>
                                    </button>
                                    <Menu
                                        id="demo-positioned-menu"
                                        aria-labelledby="demo-positioned-button"
                                        anchorEl={anchorE2}
                                        open={openProfile}
                                        onClose={handleCloseProfile}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                    >
                                        <MenuItem onClick={handleCloseProfile}>Add User</MenuItem>
                                        <Link className='nav-link' to='/'><MenuItem onClick={handleCloseProfile}>Log Out</MenuItem></Link>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>
                </Drawer>
            </div>
        </>
    );
}

export default DashboardNav