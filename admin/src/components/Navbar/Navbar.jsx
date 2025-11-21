import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo2} alt="" />
        <p>Admin Panel</p>
        <div className="profile">
          <img className='profile' src={assets.profile_icon} alt="" />
          <p>ProfileImage</p>
        </div>
    </div>
  )
}

export default Navbar