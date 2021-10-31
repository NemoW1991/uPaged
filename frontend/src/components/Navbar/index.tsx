import React from 'react';
import {Link} from 'react-router-dom';
import {navbarData} from '../../lib/constants';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './index.scss';
import logo from '../../assets/logo.png';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
    {/* Logo */}
      <div className='navbar__logo logo'>
        <img src={logo} alt='' />
        <span>uPAGED</span>
      </div>

    {/* Navigator */}
      <div className='navbar__nav nav'>
        {navbarData.map((item,index) => 
          <Link
            key={index}
            to={item.link}
            onClick={(event) => {console.log(event.currentTarget.pathname)}}
            className='nav__item'
          >
            <div>
              <span>
                {item.title}
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Login State */}
      <div className='navbar__login-state'>
        <div className='in' >
          <img src={avatar} alt='' />
          <FontAwesomeIcon className='ticker' icon={faCheckCircle} />
        </div>
        <Link to='/home' className='out' >
          <span>Log out</span>
        </Link>
      </div>

    </div>
  )
}

export default Navbar;