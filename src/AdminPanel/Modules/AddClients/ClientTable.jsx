import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ClientData from '../../Data/Clientdata/ClientData';
import EditIcon from '@mui/icons-material/Edit';
import AddClientInput from './AddClientInput';
import DeleteIcon from '@mui/icons-material/Delete';
const ClientTable = () => {
    const {
        updatehandler,
        deleteHandler
    } = AddClientInput();
    return (
        <>
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
                                    <h4>Practice Name</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Address</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Country</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>City</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Zip Code</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Email</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Mobile</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Phone</h4>
                                </TableCell>
                                <TableCell>
                                    <h4>Actions</h4>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ClientData.map((data, i) => {
                                return (
                                    <>
                                        <TableRow key={i} >
                                            <TableCell className='in'>
                                                <span className="clientdata-txt"> {data.clientid}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.clientName}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.practiceName}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.address}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.country}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.city}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.zipCode}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.email}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.mobileNo}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="clientdata-txt"> {data.phoneNo}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span onClick={() => updatehandler(data)} className="action-btn" > <EditIcon /></span>
                                                <span onClick={() => deleteHandler(data)} className="action-btn" > <DeleteIcon /></span>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default ClientTable