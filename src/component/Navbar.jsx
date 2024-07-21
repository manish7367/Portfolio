import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { links } from '../data';
import './navbar.css'
const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false)
  return (
      <nav className='nav'>
        <div className={`${ShowMenu ?'nav__menu show-menu' : 'nav__menu'}`}>
          <ul className='nav__list'>
            {links.map(({name,icon,path},index)=>{
                return(
                <li className='nav__items' key={index}>
                  <NavLink to={path} className={({isActive})=>isActive?'nav__link active-nav':'nav__link'}
                    onClick={()=>setShowMenu(!ShowMenu)}
                    >
                    {icon}
                    <h3 className='nav__name'>{name}</h3>
                  </NavLink>
                </li>
                );
              })
            }
          </ul>
        </div>
        <div className={`${ShowMenu ?'nav__toggle animate-toggle' : 'nav__toggle'}`}onClick={()=>setShowMenu(!ShowMenu)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
  )
}

export default Navbar