import React from 'react'
import Header from '../../Components/Header/Header'
import './AddClientStyles.css';
import { Grid } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddClientInput from './AddClientInput';
import ClientTable from './ClientTable';
const AddClients = () => {
    const {
        ClientId,
        ClientName,
        PracticeName,
        Address,
        Country,
        City,
        Zipcode,
        Email,
        PhoneNo,
        MobileNo,
        Pricing,
        Disable,
        setClientName,
        setPracticeName,
        setAddress,
        setCity,
        setZipcode,
        setEmail,
        setMobileNo,
        setPhoneNo,
        setPricing,
        setCountry,
        CreateNewClient,
        SaveClientInfo

    } = AddClientInput();
    return (
        <>
            <Header />
            <div className="search-bar">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={6} sm={6} md={8} lg={8}>
                        <h1 className="cl-heading">
                            <AccountBoxIcon />     Clients
                        </h1>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <input type="text" placeholder='Search Client' className="search-input" /> <button className="search-btn">SEARCH</button>
                    </Grid>
                </Grid>
            </div>
            <div className="add-client-container">

                <div className="add-client-input">
                    <h1 className="client-heading">
                        ADD NEW CLIENT
                    </h1>

                    <div className="client-form">
                        <Grid container justifyContent={''} spacing={6}>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Client ID</p>
                                <input value={ClientId} disabled type="text" className="client-input" />
                            </Grid>

                            <button onClick={CreateNewClient} className='add-client'> ADD CLIENT</button>

                        </Grid>
                    </div>
                    <hr />
                    <div className="client-form">
                        <h3 className="client-form-heading">
                            Client Details
                        </h3>
                        <Grid container justifyContent={''} spacing={6}>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Name</p>
                                <input onChange={(e) => setClientName(e.target.value)} value={ClientName} type="text" className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Practice Name</p>
                                <input type="text" onChange={(e) => setPracticeName(e.target.value)} value={PracticeName} className="client-input" />
                            </Grid>
                        </Grid>
                    </div>
                    <hr />
                    <div className="client-form">
                        <h3 className="client-form-heading">
                            Client Address
                        </h3>
                        <Grid container justifyContent={'center'} spacing={6}>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Address</p>
                                <input onChange={(e) => setAddress(e.target.value)} value={Address} type="text" className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Country</p>
                                <input onChange={(e) => setCountry(e.target.value)} value={Country} type="text" className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> City</p>
                                <input onChange={(e) => setCity(e.target.value)} value={City} type="text" className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Zip Code</p>
                                <input type="text" onChange={(e) => setZipcode(e.target.value)} value={Zipcode} className="client-input" />
                            </Grid>
                        </Grid>
                    </div>
                    <hr />
                    <div className="client-form">
                        <h3 className="client-form-heading">
                            Client Contact
                        </h3>
                        <Grid container justifyContent={''} spacing={6}>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Email</p>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} value={Email} className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Mobile No</p>
                                <input type="text" onChange={(e) => setMobileNo(e.target.value)} value={MobileNo} className="client-input" />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={3}>
                                <p className="client-txt"> Phone No</p>
                                <input type="text" onChange={(e) => setPhoneNo(e.target.value)} value={PhoneNo} className="client-input" />
                            </Grid>
                        </Grid>
                    </div>
                    <hr />
                    <div onChange={(e) => setPricing(e.target.value)} value={Pricing} className="client-form">
                        <h3 className="client-form-heading">
                            Pricing
                        </h3>
                        <Grid container justifyContent={''} spacing={0}>
                            <Grid item xs={2} sm={2} md={3} lg={2}>
                                <span className="client-txt"> Standard</span>
                                <input type="radio" name='clientprice' value={"Standard"} />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={2}>
                                <span className="client-txt"> Premium</span>
                                <input type="radio" name='clientprice' value={"Premium"} />
                            </Grid>
                            <Grid item xs={2} sm={2} md={3} lg={2}>
                                <span className="client-txt"> Doctor</span>
                                <input type="radio" name='clientprice' value={"Doctor"} />
                            </Grid>
                        </Grid>
                    </div>
                    <button onClick={SaveClientInfo} className="save">SAVE</button>
                </div>
            </div>
            <div className='add-client-table'>
                <div className='client-table'>
                    <ClientTable />
                </div>
            </div>
        </>
    )
}

export default AddClients