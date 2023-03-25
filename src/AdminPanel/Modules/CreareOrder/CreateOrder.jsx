import React from 'react'
import { Grid } from '@mui/material';
import './CreateOrderStyles.css'
import CreateOrderInput from './CreateOrderInput';
import Jaw from '../../../Assets/Jaw.jpg'
import { Link } from 'react-router-dom';
import ClientData from '../../Data/Clientdata/ClientData';
const CreateOrder = () => {
    const {
        handleCreateOrder,
        Invoice,
        Disable,
        setClient,
        setPatient,
        setOrderDate,
        setStatus,
        setDepartment,
        setDelivery,
        setCaseType,
        CreateInvoice,
        setWorkingPan,
        setWorkCategory,
        setProduct,
        setJaw,
        setShade,
        setShadeValue,
        setMargin,
        setStainValue,
        setTranslucency,
        setPonticDesign,
        setDueDate,
        setAppointment,
        setPerUnitPrice,
        setTotalPrice,
        setEnclosed,
        setNote,
        setclientAddress,
        OrderDate,

    } = CreateOrderInput();
    return (
        <>
            <div className="create-order-container">
                <div className="create-invoice-details">
                    <div className="create-order-container">
                        <div className="invoice-container">
                            <h3 className="invoice-heading">
                                Invoice Details
                            </h3>
                            <div className="order-detail-input-container">
                                <Grid container>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <p className="order-input-title">
                                            Invoice No:
                                        </p>
                                        <input type="text" value={Invoice} className="order-detail-input" disabled />
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <p className="order-input-title">
                                            Order Date:
                                        </p>
                                    <input type="text" value={OrderDate} className="order-detail-input" disabled />

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <button onClick={CreateInvoice} className='create-btn'>
                                        Create Invoice
                                    </button>

                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="invoice-container">
                    <h3 className="invoice-heading">
                        Client Details
                    </h3>
                    {/* Order Details Input */}
                    <div className="order-detail-input-container">
                        <Grid container >

                            <Grid item xs={6} sm={6} md={6} lg={6}>
                            <p className="order-input-title">
                                    Client Name:
                                </p>
                                <select onChange={(e) => setClient(e.target.value)} disabled={Disable} name="Client" id="select">
                                    <option name='Client' value="Please Select Doctor Or Clinic" selected="true" disabled="disabled"> Please Select Doctor or Clinic</option>
                                    {ClientData.map((data, i) => {
                                        return (
                                            <option key={i} name='Client'value={data.clientName}>{data.clientName}</option>
                                        )
                                    })}
                                </select> &nbsp;
                                <p className="order-input-title">
                                    Client Address:
                                </p>
                                <input type="text" onChange={(e)=>{setclientAddress(e.target.value)}} className='order-detail-input' />
                                <span className="order-input-title">Urgent Case:</span>
                                <input onChange={(e) => setCaseType(e.target.value)} disabled={Disable} type="checkbox" value={"Urgent"} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Patient:
                                </p>
                                <input onChange={(e) => setPatient(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Working Pan:
                                </p>
                                <input onChange={(e) => setWorkingPan(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Status:
                                </p>
                                <select onChange={(e) => setStatus(e.target.value)} disabled={Disable} name="Status" id="select">
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
                                <select onChange={(e) => setDepartment(e.target.value)} disabled={Disable} name="Department" id="select">
                                    <option name='Department' value="Select Department" selected="true" disabled="disabled"> Select Department </option>
                                    <option name='Department' value="Wax Up">Wax Up</option>
                                    <option name='Department' value="Model Department">Model Department</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <p className="order-input-title">
                                    Delivery:
                                </p>
                                <select onChange={(e) => setDelivery(e.target.value)} disabled={Disable} name="Delivery" id="select">
                                    <option name='Delivery' value="Select Department" selected="true" disabled="disabled"> Select Delivery Mode </option>
                                    <option name='Delivery' value="Self Pickup">Self Pickup</option>
                                    <option name='Delivery' value="By Hand">By Hand</option>
                                    <option name='Delivery' value="TCS">TCS</option>
                                </select>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            {/* Add Products */}
            <div className="create-order-container">
                <div className="invoice-container">
                    <h3 className="invoice-heading">
                        Add Product
                    </h3>
                    <div className="order-detail-input-container">
                        <Grid container>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Work Category:
                                </p>
                                <input onChange={(e) => setWorkCategory(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />

                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6}>
                                <p className="order-input-title">
                                    Product:
                                </p>
                                <input onChange={(e) => setProduct(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <div onChange={(e) => setJaw(e.target.value)} disabled={Disable} className="product-checkbox-container">
                                    <input type="radio" name='product' value={"Without Jaw"} /><span className="radio-title">Without Jaw</span>
                                    <input type="radio" name='product' value={"Upper Jaw"} /><span className="radio-title">Upper Jaw</span>
                                    <input type="radio" name='product' value={"Lower Jaw"} /><span className="radio-title">Lower Jaw</span>
                                    <input type="radio" name='product' value={"Both"} /><span className="radio-title">Both</span>
                                </div>
                                <img src={Jaw} alt="Jaw" className="jaw" />
                            </Grid>
                            <hr />

                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                <div className='shade-container'>
                                    <p className="order-input-title">
                                        Select Shade:
                                    </p>
                                    <select onChange={(e) => setShadeValue(e.target.value)} disabled={Disable} name='shade' id="select">
                                        <option name='shade' value="" selected="true" disabled="disabled"> Please Select Shade</option>
                                        <option name='shade' value="A1">A1</option>
                                        <option name='shade' value="A2">A2</option>
                                        <option name='shade' value="A3">A3</option>
                                        <option name='shade' value="A2.5">A2.5</option>
                                        <option name='shade' value="A3.5">A3.5</option>
                                        <option name='shade' value="a3.5">a3.5</option>
                                    </select>
                                </div>

                                <div onChange={(e) => setMargin(e.target.value)} disabled={Disable} className="shade-container">
                                    <span className='order-input-title'>Margin:</span>
                                    <input type="radio" name='margin' value={"NA"} /><span className="radio-title">NA</span>
                                    <input type="radio" name='margin' value={"Standard Margin"} /><span className="radio-title">Standard</span>
                                    <input type="radio" name='margin' value={"Metal Margin"} /><span className="radio-title">Metal</span>
                                    <input type="radio" name='margin' value={"Porcelain Margin"} /><span className="radio-title">Porcelain</span>
                                    <input type="radio" name='margin' value={"Disappearing Margin"} /><span className="radio-title">Disappearing</span>
                                </div>
                                <div onChange={(e) => setStainValue(e.target.value)} disabled={Disable} className="shade-container">
                                    <span className='order-input-title'>Occlusal Stains:</span>
                                    <input type="radio" name='occlusal stains' value={"NA"} /><span className="radio-title">NA</span>
                                    <input type="radio" name='occlusal stains' value={"Light"} /><span className="radio-title">Light</span>
                                    <input type="radio" name='occlusal stains' value={"Medium"} /><span className="radio-title">Medium</span>
                                    <input type="radio" name='occlusal stains' value={"Heavy"} /><span className="radio-title">Heavy</span>
                                </div>
                                <div onChange={(e) => setTranslucency(e.target.value)} disabled={Disable} className="shade-container">
                                    <span className='order-input-title'>Translucency:</span>
                                    <input type="radio" name='translucency' value={"NA"} /><span className="radio-title">NA</span>
                                    <input type="radio" name='translucency' value={"Low"} /><span className="radio-title">Low</span>
                                    <input type="radio" name='translucency' value={"Medium"} /><span className="radio-title">Medium</span>
                                    <input type="radio" name='translucency' value={"High"} /><span className="radio-title">High</span>
                                </div>
                                <div onChange={(e) => setPonticDesign(e.target.value)} disabled={Disable} className="shade-container">
                                    <span className='order-input-title'>Pontic Design:</span>
                                    <input type="radio" name='pontic design' value={"NA"} /><span className="radio-title">NA</span>
                                    <input type="radio" name='pontic design' value={"Partial Bridge"} /><span className="radio-title">Partial Bridge</span>
                                    <input type="radio" name='pontic design' value={"Buccal Crest"} /><span className="radio-title">Buccal Crest</span>
                                    <input type="radio" name='pontic design' value={"Point Contact"} /><span className="radio-title">Point Contact</span>
                                    <input type="radio" name='pontic design' value={"No Contact"} /><span className="radio-title">No Contact</span>
                                </div>
                                <span className="order-input-title">
                                    Due Date:
                                </span>
                                <input onChange={(e) => setDueDate(e.target.value)} disabled={Disable} type="date" className="order-detail-input" />
                                <br /><br />
                                <span className="order-input-title">
                                    appointment:
                                </span>
                                <input onChange={(e) => setAppointment(e.target.value)} disabled={Disable} type="date" className="order-detail-input" />
                                <div onChange={(e) => setEnclosed(e.target.value)} disabled={Disable} className="shade-container">
                                    <span className='order-input-title'>Enclosed:</span>
                                    <input type="radio" name='enclosed' value={"Impression"} /><span className="radio-title">Impression</span>
                                    <input type="radio" name='enclosed' value={"Model"} /><span className="radio-title">Model</span>
                                    <input type="radio" name='enclosed' value={"Bite"} /><span className="radio-title">Bite</span>
                                    <input type="radio" name='enclosed' value={"Digital"} /><span className="radio-title">Digital</span>
                                    <input type="radio" name='enclosed' value={"Other"} /><span className="radio-title">Other</span>
                                </div>
                                <span className="order-input-title">
                                    Per Unit:
                                </span>
                                <input onChange={(e) => setPerUnitPrice(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />
                                <br /><br />
                                <span className="order-input-title">
                                    Total Price
                                </span>
                                <input onChange={(e) => setTotalPrice(e.target.value)} disabled={Disable} type="text" className="order-detail-input" />
                                <br />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="create-order-container">
                    <div className="invoice-container">
                        <h3 className="invoice-heading">
                            Add Note
                        </h3>
                        <div className="text-area-container">
                            <textarea disabled={Disable} onChange={(e) => setNote(e.target.value)} placeholder='Add Notes' className='text-area' cols="100" rows="25" />

                        </div>
                    </div>
                </div>
                <div className="invoice-container">
                    <div className="btn">
                        <button disabled={Disable} className='create-btn' onClick={handleCreateOrder}>Save</button>
                        <Link to='/admin-dashboard/lab-slip'> <button className='create-btn' >Print Job Card</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateOrder