import React, { useContext, useEffect, useState } from "react";
import { FaUser, FaMale, FaFemale } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BookDataContext } from "../pages/BooksContext";
import "./Navigation.css";

const Navigation = () => {
  const { isLogin, setIsLogin } = useContext(BookDataContext); // Import setIsLogin from context
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    setIsLogin(false); // Set isLogin to false
  };

    useEffect(()=>{
    // console.log("islogin" ,isLogin);
  },[isLogin])


  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  const isMale = true;

  return (
    <div className="nav_items">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/books" className="link">
        Books
      </Link>
      {isLogin ? (
        <div className="profile-dropdown" onClick={handleProfileClick}>
          {/* Display male or female icon based on user's gender */}
          {/* Replace isMale with your actual logic to determine user's gender */}
          {isMale ? <FaMale className="profile-icon" /> : <FaFemale className="profile-icon" />}
          {showDropdown && (
            <div className="dropdown-content">
              {/* <Link to="/profile">My Profile</Link> */}
              <a onClick={handleLogout} className="logout">Logout</a>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <a className="login-button">Login</a>
        </Link>
      )}
    </div>
  );
};

export default Navigation;



// import React, { useContext, useEffect, useState } from 'react';
// import { FaUser, FaMale, FaFemale } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import './Navigation.css';
// import { BookDataContext } from '../pages/BooksContext';

// const Navigation = () => {
//   // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));
//   const navigate = useNavigate();


//   const [isLoign,setIsLogin,access_token] =useContext(BookDataContext)
//   const handleLogout = () => {
//     localStorage.removeItem('access_token');
//     setIsLogin(false);
//   };

//   useEffect(() => {

//     console.log("testing");
//     setIsLogin(access_token !== null);
//     // if(accessToken){
//     //   setIsLoggedIn(true)
//     // }
//   },[access_token]);

//   return (
//     <div className='nav_items'>
//       <Link to='/' className='link'>Home</Link>
//       <Link to='/about' className='link'>About</Link>
//       <Link to='/books' className='link'>Books</Link>
//       {isLoign ? (
//         <div className='profile-dropdown'>
//           {/* Display male or female icon based on user's gender */}
//           {/* Use condition here to decide which icon to show */}
//           {/* Replace FaUser with appropriate icon based on gender */}
//           <FaUser className='profile-icon' />
//           <div className='dropdown-content'>
//             <Link to='/profile'>My Profile</Link>
//             <button onClick={handleLogout}>Logout</button>
//           </div>
//         </div>
//       ) : (
//         <Link to='/login'>
//           <button className='login-button'>Login</button>
//         </Link>
//       )}
//     </div>
//   );
// }

// export default Navigation;
