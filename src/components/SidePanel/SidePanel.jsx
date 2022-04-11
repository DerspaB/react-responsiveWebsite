import React from 'react'
import { SearchBar } from '../SearchBar/SearchBar'
import './style.css'


export const SidePanel = ({ closePanel }) => {
  return (
    <div className='background' onClick={closePanel}>
      <div className='panel animated slow slideInLeft' onClick={(e) => { e.stopPropagation() }}>
        <header>
          <h3>Menu</h3>
        </header>

        <div className='nav-content'>
          <SearchBar
            placeholder={'Search'}
            iconStart={<i class='bx bx-search-alt text-light icon-size'></i>}
          />
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <footer className='panel-footer'>
          <h3>Legal Policies</h3>
        </footer>
      </div>
      
    </div>
  )
}
