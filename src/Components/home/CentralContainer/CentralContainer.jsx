import React from 'react'
import cookie from '../../../assets/Cookie.png'
import './CentralContainer.css'

const CentralContainer = ({click}) => {
  return (
    <div className='central-container'>
        <div className='cookie-image'>
          <img onClick={click} src={cookie} alt="Cookie" />
        </div>
    </div>
  )
}

export default CentralContainer