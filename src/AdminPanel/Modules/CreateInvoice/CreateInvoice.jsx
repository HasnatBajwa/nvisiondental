import React from 'react'
import './CreateInvoiceStyles.css'
import { useReactToPrint } from 'react-to-print';
import Header from '../../Components/Header/Header';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import OrderData from '../../Data/OrderTableData/OrderTableData';
import Logo from '../../../Assets/Logo.png'
import { Grid } from '@mui/material';
const CreateInvoice = () => {
    const [invoiceData, setinvoiceData] = React.useState(null);
    const invoiceRef = React.useRef();
    const handlePrint = useReactToPrint({
        content: () => invoiceRef.current,
    });

    return (
        <>
            <Header />
            <div className="create-invoice-container">
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead >
                                <TableRow sx={{
                                    "& th": {
                                        color: "white",
                                        backgroundColor: "#29354a"
                                    }
                                }}>
                                    <TableCell>
                                        <h4>Invoice No</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Entry Date</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Due Date</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Clinic / Doctor</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Patient</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Work Category</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Per Unit Price</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Total Price</h4>
                                    </TableCell>
                                    <TableCell>
                                        <h4>Actions</h4>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {OrderData.map((data, i) => {
                                    return (
                                        <>
                                            <TableRow key={i} >
                                                <TableCell>
                                                    {data.invoice}
                                                </TableCell>
                                                <TableCell>
                                                    {data.orderdate}
                                                </TableCell>
                                                <TableCell>
                                                    {data.duedate}
                                                </TableCell>
                                                <TableCell>
                                                    {data.client}
                                                </TableCell>
                                                <TableCell>
                                                    {data.patient}
                                                </TableCell>
                                                <TableCell>
                                                    {data.product}
                                                </TableCell>
                                                <TableCell>
                                                    {data.perunitprice}
                                                </TableCell>
                                                <TableCell>
                                                    {data.totalprice}
                                                </TableCell>
                                                <TableCell>
                                                    <button key={i} onClick={() => setinvoiceData(data)}>Create Invoice</button>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>

            <div className="invoice-generator">
                <Grid container justifyContent={'center'}>
                    {invoiceData ?
                        <div ref={invoiceRef} className="invoice">
                            <div className="client-detail-container">
                                <Grid container>
                                    <p className="invoice-no">
                                        Invoice No: <span className='inv'>{invoiceData.invoice}</span>
                                    </p>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <h1 className='client-name'>{invoiceData.client}</h1>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                            <TableContainer sx={{ maxHeight: 440 }}>
                                                <Table stickyHeader aria-label="sticky table">
                                                    <TableHead >
                                                        <TableRow sx={{
                                                            "& th": {
                                                                color: "white",
                                                                backgroundColor: "#29354a"
                                                            }
                                                        }}>
                                                            <TableCell>
                                                                <h4>Amount Due</h4>
                                                                <hr />
                                                            </TableCell>
                                                            <TableCell>
                                                                <h4>Due Date</h4>
                                                                <hr />
                                                            </TableCell>
                                                            <TableCell>
                                                                <h4>Enclosed</h4>
                                                                <hr />
                                                            </TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>

                                                        <TableRow >
                                                            <TableCell>
                                                                {invoiceData.totalprice}
                                                            </TableCell>
                                                            <TableCell>
                                                                {invoiceData.duedate}
                                                            </TableCell>
                                                            <TableCell>

                                                            </TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Paper>
                                        <p className="txt"> Please Return This Portion With Your Payment</p>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="invoice-info-container">
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className="img-inv-container">
                                            <img src={Logo} alt="Logo" className='company-logo-inv' />
                                            <span className="inv-txt">INVOICE</span>
                                        </div>
                                        <hr />
                                        <div className="inv-detail">
                                            <p className="inv-due">
                                                Due Date: <span className="inv">{invoiceData.duedate}</span>
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <div className="inv-sender">
                                            <p className="sender">
                                                Bill From: <br /> <span className="name">
                                                    N VISION DENTAL LABORATORY
                                                </span>
                                            </p>
                                            <p className="sender">
                                                Address: <br /><span className="name">
                                                    P-369 Street-2 ,Block B Al Najaf Colony
                                                    38000 Faisalabad, Pakistan
                                                </span>
                                            </p>
                                            <p className="sender">
                                                Contact: <br /><span className="name">
                                                    info@nvisiondental.com | +92-300-4601314

                                                </span>
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <div className="inv-sender">
                                            <p className="sender">
                                                Bill To: <br /> <span className="name">
                                                    {invoiceData.client}
                                                </span>
                                            </p>
                                            <p className="sender">
                                                Address: <br /> <span className="name">
                                                    {invoiceData.clientaddress}
                                                </span>
                                            </p>
                                            <p className="sender">
                                                Contact: <br /> <span className="name">
                                                    {invoiceData.clientphone}
                                                </span>
                                            </p>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className="inv-tab">
                                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                                <TableContainer sx={{ maxHeight: 440 }}>
                                                    <Table stickyHeader aria-label="sticky table">
                                                        <TableHead >
                                                            <TableRow sx={{
                                                                "& th": {
                                                                    color: "white",
                                                                    backgroundColor: "#29354a"
                                                                }
                                                            }}>
                                                                <TableCell>
                                                                    <h4>Invoice No</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Entry Date</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Client Name</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Patient Name</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Category</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Product</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Per Unit Price</h4>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <h4>Total Price</h4>
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>

                                                            <TableRow >
                                                                <TableCell>
                                                                    {invoiceData.invoice}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.orderdate}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.client}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.patient}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.category}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.product}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.perunitprice}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {invoiceData.totalprice}
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Paper>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <div className="inv-receipt">
                                            <p className="inv">TOTAL: <span className="receipt-txt">PKR {invoiceData.totalprice} /-</span></p>
                                            <p className="inv">PREVIOUS DUE: <span className="receipt-txt">PKR {0} /-</span></p>
                                            <hr />
                                            <br /><br />
                                            <p className="inv">TOTAL DUE: <span className="receipt-txt">PKR {parseInt(invoiceData.totalprice)+500} /-</span></p>

                                        </div>
                                    </Grid>
                                    <div className="receipt-noteS">
                                            <h2 className='notes-heading'>
                                                Important Notes
                                            </h2>
                                            <p className="notes-txt">1) If any payment is missing from the statement, please let us know as soon as possible.
                                             Kindly Pay the amount within the due date ({invoiceData.duedate}).  If you have paid the amount after due date it will be shown in the next month</p>
                                            <p className="notes-txt">2) Thankyou very much. We appreciate your business. Please Clear your dues as soon as possible</p>
                                        </div>
                                </Grid>
                            </div>


                        </div>

                        :
                        <div>
                            No Data Selected
                        </div>
                    }
                </Grid>
            </div>
            <button className='invoice-print' onClick={handlePrint}>print</button>
        </>
    )
}

export default CreateInvoice