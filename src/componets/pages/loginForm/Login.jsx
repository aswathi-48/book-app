import React, { useContext, useState } from 'react';
import { MdOutlineLockOpen } from "react-icons/md";
import { CgGirl } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
// import UserContext from '../../context/UserContext';
    // import env from 'react-dotenv'

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(false); 
//   const { setIsLoggedIn } = useContext(UserContext)
    

  const handleLogin =async (e) => {
    e.preventDefault();
    // Hardcoded default username and password
    // const defaultuserName = 'aswathi';
    // const defaultPassword = '1234';
    // const defaultAccessToken = 'default_access_token_1234';


     

    // if (userName === defaultuserName && password === defaultPassword) {
      // Save access token to local storage
      // localStorage.setItem("userData",JSON.stringify(userData))
    //   localStorage.setItem('userName', userName);
    //   localStorage.setItem('password', password);
    //   localStorage.setItem('accessToken', defaultAccessToken);
    //   setIsLoggedIn(true); // Set isLoggedIn to true
    //   navigate('/');
    // } else {
    //   console.log('Invalid email or password. Please try again.');
    // }
    // console.log( process.env.base_Url);


    try {
      const response = await axios.post('https://book-store-node-27us.onrender.com/api/v1/user/login',{email:userName,password}).then(res => {
        const { access_token } = res.data;
        localStorage.setItem('access_token', access_token)})        
        navigate('/')
       
       } catch (error) {
        console.log(error.message,"error in fetching API");
       }
  };


  // console.log(isLoign, 'is login')

  return (
   
    <div className='login'>
            <form onSubmit={handleLogin} encType='multipart/form-data'>
            <div className='log-main'>
                <div className='log-main-one'>
                <div className='log-head'>
                    <h4>Login</h4>
                </div>
                <div className='log-body'>
                    <div  className='log-body-one'>
                    <div className='log-body-cntnt'>
                    <CgGirl className='log-icon'/>
                        <input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
                    </div>
                  
                    <div className='log-body-cntnt'>
                    <MdOutlineLockOpen className='log-icon'/>
                        <input type="password" placeholder='Passoword' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>                   
                    <div className='log-btn'>
                        <button type='submit'>Login</button>
                    </div>
                    {error && <div className='log-error'>{error}</div>}
               <div className='log-frgt'>
                <p>Forgot Password? <Link to={'/forgotpass'}><b>Click</b></Link> </p>
             </div>
             <div className='log-para'>
                 <p>Don't have an account?<Link to='/register' className='log-link'> Register</Link></p>
            </div>
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
  );
}

export default Login;



// import React, { useState } from 'react'
// import { useForm } from "react-hook-form";
// import { CgGirl } from "react-icons/cg";
// import { MdOutlineLockOpen } from "react-icons/md";
// import { HiOutlineMail } from "react-icons/hi";
// import { Link, useNavigate } from 'react-router-dom'
// import * as Yup from "yup";
// import { yupResolver } from '@hookform/resolvers/yup';
// import './Register.css'
// import axios from 'axios';


// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


// const schema = Yup.object().shape({
//     first_name: Yup.string().required(),
//     last_name: Yup.string().required(),
//     gender: Yup.string().required(),
//     email: Yup.string().email().required(),
//     password: Yup.string().required(),
//     date_of_birth: Yup.date()
//     .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
//     .required("Required"),
//     phone_number: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//   });

// const Register = () => {

//     const navigate= useNavigate()
//   const { register, handleSubmit, formState: { values } } = useForm({
//     resolver: yupResolver(schema)
//    });

  // const [formData,setFormData] = useState({
  //   "first_name": "",
  //   "last_name": "",
  //   "gender": "",
  //   "email": "",
  //   "password": "",
  //   "date_of_birth": "",
  //   "phone_number": ""
  // })

  // const handleInputChange = (e) => {
  //   setFormData( e.target.name, e.target.value)
  // }




// //   let Formdata = new FormData()
// //   Formdata.append('Name',Name)
// //   Formdata.append('Email',Email)
// //   Formdata.append('Password',Password)
// //   Formdata.append("Images",Images)
// const onSubmit = async(e) => {
//     // e.preventdefault()
//     const formDataToSend = new FormData();
//       formDataToSend.append('first_name', formData.first_name);
//       formDataToSend.append('last_name', formData.last_name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('gender', formData.gender);
//       formDataToSend.append('date_of_birth', formData.date_of_birth);
//       formDataToSend.append('phone_number', formData.phone_number);
//     // console.log(data);
//     await axios.post('https://book-store-node-27us.onrender.com/api/v1/user/register',)
//     .then((res) => console.log(res.data))
//     navigate('/login')
//   };
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
  
// //     const formData = {
// //       username: e.target.username.value,
// //       email: e.target.email.value,
// //       password: e.target.password.value,
// //     };
  
// //     const errors = schema.validate(formData);
  
// //   };
// //  function onSubmit(data) {
// //     console.log(data);
// //   }

//   return (
//     <div className='register'>
//             <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
//             <div className='reg-main'>
//                 <div className='reg-main-one'>
//                 <div className='reg-head'>
//                     <h4>Register</h4>
//                 </div>
//                 <div className='reg-body'>
//                     <div  className='reg-body-one'>
//                     <div className='reg-body-cntnt'>
//                         <input type="text" name='first_name' placeholder='first_name' value={formData.first_name} {...register("first_name")}  onChange={handleInputChange} />
                        
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="text" name='last_name' placeholder='last_name' value={formData.last_name} {...register("last_name")}  onChange={handleInputChange} />
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="text" name='gender' placeholder='gender'value={formData.gender} {...register("gender")}  onChange={handleInputChange}/>
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="email" name='email' placeholder='Email' value={formData.email} {...register("email")}  onChange={handleInputChange}/>
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="password" name='passoword' placeholder='passoword' value={formData.password} {...register("passoword")}  onChange={handleInputChange}/>
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="date" name='date_of_birth' placeholder='date of birth' value={formData.date_of_birth} {...register("date_of_birth")}  onChange={handleInputChange}/>
//                     </div>
//                     <div className='reg-body-cntnt'>
//                         <input type="number" name='phone_number' placeholder='phone_number' value={formData.phone_number} {...register("phone_number")}  onChange={handleInputChange}/>
                    
//                     </div>
                    
//                     <div className='reg-btn'>
//                         <button type='submit'>Create Account</button>
//                     </div >
//                     <div className='reg-para'>
//                         <p>Already have an account?<Link to='/login' className='reg-link'>Login</Link></p>
//                     </div>
//                 </div>
//                 </div>
//                 </div> 
//             </div>
//             </form>
//         </div>
//   )
// }

// export default Register
