import React from 'react'
import Header from '../../Components/Header/Header'
import { Grid } from '@mui/material';
import './CreateOrderStyles.css'
import CreateOrderInput from './CreateOrderInput';
const CreateOrder = () => {
    const {
        Invoice,
        Client,
        WorkingPan,
        Patient,
        OrderDate,
        Status,
        Department,
        Delivery,
        CaseType,
        setClient,
        setPatient,
        setOrderDate,
        setStatus,
        setDepartment,
        setDelivery,
        setCaseType,
        handleCreateOrder,
        CreateInvoice,
        setWorkingPan,
    } = CreateOrderInput();
    return (
        <>
            <Header />
            <div className="create-order-container">
                <div className="invoice-container">
                    <h3 className="invoice-heading">
                        Order Details
                    </h3>
                    {/* Order Details Input */}
                    <div className="order-detail-input-container">
                        <Grid container >
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <p className="order-input-title">Invoice No:</p>
                                <input type="text" value={Invoice} className="order-detail-input" disabled="disabled" />
                                <button onClick={CreateInvoice}>Create Invoice</button>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Client:
                                </p>
                                <select onChange={(e) => setClient(e.target.value)} name="Client" id="select">
                                    <option name='Client' value="Please Select Doctor Or Clinic" selected="true" disabled="disabled"> Please Select Doctor or Clinic</option>
                                    <option name='Client' value="Hassan Dental clinic">HDC</option>
                                    <option name='Client' value="Aziz Fatima Hospital">AFH</option>
                                    <option name='Client' value="Tahir Dental Clinic">TDC</option>
                                </select> &nbsp;
                                <span className="order-input-title">Urgent Case:</span>
                                <input onChange={(e) => setCaseType(e.target.value)} type="checkbox" value={"Urgent"} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Patient:
                                </p>
                                <input onChange={(e) => setPatient(e.target.value)} type="text" className="order-detail-input" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Ordered:
                                </p>
                                <input onChange={(e) => setOrderDate(e.target.value)} type="date" className="order-detail-input" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Working Pan:
                                </p>
                                <input onChange={(e) => setWorkingPan(e.target.value)} type="text" className="order-detail-input" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Status:
                                </p>
                                <select onChange={(e) => setStatus(e.target.value)} name="Status" id="select">
                                    <option name='Status' value="Select Status" selected="true" disabled="disabled"> Select Status </option>
                                    <option name='Status' value="In Production">In Production</option>
                                    <option name='Status' value="Out For delivery">Out For Delivery</option>
                                    <option name='Status' value="Received">Received</option>
                                </select>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Department:
                                </p>
                                <select onchange={(e) => setDepartment(e.target.value)} name="Department" id="select">
                                    <option name='Department' value="Select Status" selected="true" disabled="disabled"> Select Department </option>
                                    <option name='Department' value="Wax Up">Wax Up</option>
                                    <option name='Department' value="Model Department">Model Department</option>

                                </select>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <p className="order-input-title">
                                    Delivery:
                                </p>
                                <select onchange={(e) => setDelivery(e.target.value)} name="Delivery" id="select">
                                    <option name='Delivery' value="Select Status" selected="true" disabled="disabled"> Select Delivery Mode </option>
                                    <option name='Delivery' value="Self Pickup">Self Pickup</option>
                                    <option name='Delivery' value="By Hand">By Hand</option>
                                    <option name='Delivery' value="TCS">TCS</option>

                                </select>
                            </Grid>
                        </Grid>
                        <button onClick={handleCreateOrder}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateOrder