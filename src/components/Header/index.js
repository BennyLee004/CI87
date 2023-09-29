import React from 'react'
import "./style.css"
import { NavLink } from 'react-router-dom' 
function Header() {
  const linkClassName = params => {
    return `header__link ${params.isActive ? "header__link--active" : ""}`
  }
  return (
    <div className='header'>
      <ul>
        <li><NavLink className={linkClassName}  to="/">Home</NavLink></li>
        <li><NavLink className={linkClassName} to="/welcome">Welcome</NavLink></li>
        <li><NavLink className={linkClassName} to="/products">Products</NavLink></li>
        <li><NavLink className={linkClassName} to="/profile">Profile</NavLink></li>
      </ul>
    </div>
  )
}

export default Header 