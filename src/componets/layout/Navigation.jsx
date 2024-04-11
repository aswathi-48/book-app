import React from 'react'
import './Navigation.css'
// import { Link } from '@mui/material'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className='nav_items'>
        {/* <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/books">Books</a></li>
        </ul> */}
        {/* <Link to='/'>Home</Link> */}
      <Link to='/' className='link'>Home</Link>
      <Link to='/about' className='link'>About</Link>
      <Link to='/books' className='link'>Books</Link>
   

    </div>
  )
}

export default Navigation