import React from 'react'
import OrderDetails from '../../Data/OrderDetails/OrderDetails'
import './LabSlipStyles.css'
import { Grid } from '@mui/material'
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom'
const LabSlip = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    return (
        <div className="lab-slip-container">
            <div className="lab-slip">
                <div ref={componentRef} className="address-container">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <span className="add-title">
                                N VISION DENTAL LABORATORY
                            </span>
                            <br /><br />
                            <span className="add-txt">
                                P-369 Street-2 ,Block B Al Najaf Colony
                                <br />
                                Faisalabad Pakistan
                                <br />
                                Tel: +92-41-8555333, +92-300-4601314
                            </span>
                        </Grid>
                    </Grid>

                    <div className="lab-slip-details">
                        {OrderDetails.map((data, i) => {
                            return (
                                <>
                                    <div>
                                        <span className='slip-title'> Invoice No: </span> &nbsp; &nbsp;
                                        <span className="slip-txt">{data.invoice}</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Client:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.client}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Patient:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.patient}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            OrderDate:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.orderdate}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Due Date:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.duedate}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Enclosed:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.enclosed}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Category:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.workcategory}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="heading">
                                            Product:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.product}
                                        </span>
                                        <br />
                                        <span className="heading-txt">
                                            {data.jaw}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Shade:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.shadevalue}
                                        </span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span className="heading">
                                            Description:
                                        </span>&nbsp; &nbsp;
                                        <span className="heading-txt">
                                            {data.note}
                                        </span>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
            <button onClick={handlePrint} className="print">Print</button>
            <Link to='/admin-dashboard/create-order'><button className='back-home'>Back</button></Link>
        </div>
    )
}

export default LabSlip