import React from 'react'
import './style.css'

export const SearchBar = ({placeholder, iconStart}) => {
    
  return (
    <div className='input-container'>
      {
        iconStart
        && <div className='start-content'>{iconStart}</div>
      }
    
      <input type="text"
        style={{
          paddingLeft: iconStart ? '40px' : '20px'
        }}
        placeholder={placeholder}
      />
    </div>
  )
}
