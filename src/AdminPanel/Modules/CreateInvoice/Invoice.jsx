import React from "react";
import { Grid } from "@mui/material";
import Logo from "../../../Assets/Logo.png";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const Invoice = () => {
  return (
    <>
      <div className="invoice-container">
        <div className="inv-header">
          <Grid container justifyContent={"center"}>
            <Grid item xs={6} sm={6} md={8} lg={8}>
              <img src={Logo} alt="logo" className="inv-logo" />
              <div className="inv-address">
                <h2 className="inv-heading">N VISION DENTAL LABORATORY</h2>
                <p className="address-txt">
                  P-369 Street-2 ,Block B Al Najaf Colony 38000 Faisalabad,
                  Pakistan
                </p>
                <p className="address-txt">info@nvisiondental.com</p>
                <p className="address-txt">
                  +92-300-4601314 | +92-333-4601314 | +92-41-8555333
                </p>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={4} lg={4}>
              <h1 className="inv-heading">INVOICE</h1>
              <p className="inv-no">invoice No</p>
              <hr />
              <br />
              <h1 className="inv-heading">Due Date</h1>
              <p className="inv-no">Due Date</p>
  
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={12}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div className="bill-container">
              <h2 className="inv-bill-title">Bill To</h2>
              <hr />
              <h3 className="client-name">Hassan Dental</h3>
              <p className="client-practice-name">Hassan Dental Clinic</p>
              <p className="client-address">
                hassan Block Khayaban gardens Faisalabad
              </p>
              <p className="client-phone-no">03117270707</p>
              <p className="client-email">hasnatjbajwa@gmail.com</p>
            </div>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <div className="bill-container">
              <h2 className="inv-bill-title">Ship To</h2>
              <hr />
              <h3 className="client-name">Hassan Dental</h3>
              <p className="client-practice-name">Hassan Dental Clinic</p>
              <p className="client-address">
                hassan Block Khayaban gardens Faisalabad
              </p>
              <p className="client-phone-no">03117270707</p>
              <p className="client-email">hasnatjbajwa@gmail.com</p>
            </div>
          </Grid>
        </Grid>
        <div className="invoice">
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        color: "white",
                        backgroundColor: "#29354a",
                      },
                    }}
                  >
                    <TableCell>
                      <h4>Invoice No</h4>
                    </TableCell>
                    <TableCell>
                      <h4>ClientName</h4>
                    </TableCell>
                    <TableCell>
                      <h4>OrderDate</h4>
                    </TableCell>
                    <TableCell>
                      <h4>Per Unit Cost</h4>
                    </TableCell>
                    <TableCell>
                      <h4> Total Cost</h4>
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Invoice;
