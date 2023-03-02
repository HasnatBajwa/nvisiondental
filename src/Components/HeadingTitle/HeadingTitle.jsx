import React from 'react'
import './HeadingTitleStyles.css'
const HeadingTitle = (Props) => {
  return (
    <div className='heading-title-container'>
        <h3 className='heading-title'>
            {Props.name}
        </h3>
    </div>
  )
}

export default HeadingTitle