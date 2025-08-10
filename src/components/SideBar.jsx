import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const SideBar = ({onClose}) => {
  return (
    <>
        <div className='sideBarMenue'>
        <div>
        <div className='SideBar' onClick={onClose}>
            <div className='one'></div>
            <div className='two'></div>
            <div className='three'></div>
          </div>
          <nav>
             <li>Food</li>
             <li>Salad</li>
             <li>Drinks</li>
             <li>Salad</li>
          </nav>
        </div>
    </div>
    </>
  )
}

export default SideBar