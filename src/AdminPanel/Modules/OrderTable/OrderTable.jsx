import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './OrderTableStyles.css'
import OrderData from '../../Data/OrderTableData/OrderTableData';

const OrderTable = () => {
    return (
        <div className="order-table-container">


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
                                    <h4>PAN</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Entry Date</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Clinic / Doctor</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Patient</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Services</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Department</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Status</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Due Date</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Actions</h4>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {OrderData.map((data,i)=>{
                                return(
                                    <>
                                    <TableRow key={i} >
                                        <TableCell>
                                            {data.invoice}
                                        </TableCell>
                                        <TableCell>
                                            {data.pan}
                                        </TableCell>
                                        <TableCell>
                                            {data.orderdate}
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
                                            {data.dpt}
                                        </TableCell>
                                        <TableCell>
                                            {data.status}
                                        </TableCell>
                                        <TableCell>
                                            {data.duedate}
                                        </TableCell>
                                        <TableCell>
                                            {data.action}
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
    );
}
export default OrderTable