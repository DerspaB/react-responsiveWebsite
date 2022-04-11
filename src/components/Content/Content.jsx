import React, { useState } from 'react'
import { MainPanel } from '../MainPanel/MainPanel'
import { SidePanel } from '../SidePanel/SidePanel'
import { Toolbar } from '../Toolbar/Toolbar'
import './style.css'

export const Content = () => {

  const [isShowSidePanel, isSetShowSidePanel] = useState(false);

  return (
    <div>
        {
          isShowSidePanel && <SidePanel closePanel={() => isSetShowSidePanel(false)} />
        }
        <Toolbar
          showSidePanel={() => isSetShowSidePanel(true)} 
        />
        <MainPanel />
    </div>
    
  )
}
