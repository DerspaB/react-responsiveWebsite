import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'

import './style.css'

export const Toolbar = ({showSidePanel}) => {
  return (
    <div className='toolbar'>
      <div className='toolbar-wrapper'>
        <div className='links'>
          <i onClick={showSidePanel} class='bx bx-menu'></i>
          <h1>LOGO</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='searchBar'>
          <SearchBar
            placeholder={'Search'}
            iconStart={<i class='bx bx-search-alt text-light icon-size'></i>}
          />
        </div>
      </div>
      
    </div>
  )
}
