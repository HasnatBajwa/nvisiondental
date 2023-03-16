import React from 'react'
import './JobCardStyles.css'
import OrderData from '../../Data/OrderTableData/OrderTableData'
const JobCard = (props) => {
  return (
    <>
      <div className="card-container">
        <div className={props.data.type}>
          <p className="job-card-number">
            {props.data.value}
          </p>
          <h1 className='job-card-title'>
            {props.data.title}
          </h1>
        </div>
      </div>
    </>
  )
}

export default JobCard