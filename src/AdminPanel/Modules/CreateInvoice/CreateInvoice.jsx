import React from 'react'
import './CreateInvoiceStyles.css'
import Header from '../../Components/Header/Header';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CreateInvoiceInput from './CreateInvoiceInput'
import ClientData from '../../Data/Clientdata/ClientData';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import Invoice from './Invoice';
import OrderData from '../../Data/OrderTableData/OrderTableData';
const CreateInvoice = () => {
    const {
        showClientBill,
        createBill,
        ClientBill,
        DueDate
    } = CreateInvoiceInput()
    return (
        <>
            <Header />
            <div className="search-bar-container">
                <select name="Clients" id="client-search">
                    <option name='Clients' value="Select Client" selected="true" disabled="disabled"> Select Client Name </option>
                    {
                        ClientData.map((data, i) => {
                            return (
                                <>
                                    <option name='Clients' value={data.clientName}>{data.clientName}</option>
                                </>
                            )
                        })
                    }
                </select>
                <button className="search">SEARCH</button>
                <input type="date" className='client-search' />
                <button className="search">Add Due Date</button>
                <input type="text" disabled value={ClientBill} className='client-search' placeholder='Bill No' />
                <button onClick={createBill} className="search">Create</button>
            </div>
            <div className="create-invoice-container">
                <div className="invoice">
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
                                            <h4>ID</h4>
                                        </TableCell>
                                        <TableCell>
                                            <h4>Name</h4>
                                        </TableCell>
                                        <TableCell>
                                            <h4>Due Date</h4>
                                        </TableCell>
                                        <TableCell>
                                            <h4> Amount</h4>
                                        </TableCell>
                                        <TableCell>
                                            <h4>OrderDate</h4>
                                        </TableCell>
                                        <TableCell>
                                            <h4>Actions</h4>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                            <TableBody>
                                {OrderData.map((data, i) => {
                                    return (
                                        <>
                                            <TableRow key={i} >
                                                <TableCell className='in'>
                                                    <span className="clientdata-txt"> {data.invoice}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="clientdata-txt"> {data.client}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="clientdata-txt"> {data.duedate}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="clientdata-txt"> {data.totalprice}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="clientdata-txt"> {data.orderdate}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="action-btn" title='add to bill' onClick={() => showClientBill(data)} ><AddBoxIcon /> </span>
                                                    <span className="action-btn" title='delete'> <DeleteIcon /></span>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })}

                            </TableBody>
                        </TableContainer>
                    </Paper>
                </div>
            </div>

            <div className="invoice-paper">
                <Invoice />
            </div>
        </>
    )
}

export default CreateInvoice