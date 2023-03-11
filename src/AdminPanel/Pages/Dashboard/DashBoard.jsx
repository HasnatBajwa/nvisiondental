import React from 'react'
import Header from '../../Components/Header/Header'
import JobCard from '../../Modules/JobCard/JobCard'
import { Grid } from '@mui/material'
import './DashboardStyles.css'
import OrderTable from '../../Modules/OrderTable/OrderTable'
const DashBoard = () => {
  return (
    <>
      <Header />
      <div className="job-card-container">
        <Grid container justifyContent={'center'}>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <JobCard data={{ title: "Total Orders", type: "red", value: "1" }} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <JobCard data={{ title: "Completed Orders", type: "blue", value: "1" }} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <JobCard data={{ title: "Pending Orders", type: "grey", value: "1" }} />
          </Grid>
        </Grid>
      </div>
      <div className="table-container">
        <OrderTable />
      </div>

    </>
  )
}

export default DashBoard