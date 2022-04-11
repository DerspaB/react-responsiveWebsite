import React from 'react'
import './style.css'

export const Card = ({title, description, img}) => {
  return (
    <div className='card-content'>
      <img src={img} alt="card-image" />

      <div className='card-description'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  )
}
