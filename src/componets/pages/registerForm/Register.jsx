
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { CgGirl } from "react-icons/cg";
import { MdOutlineLockOpen } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup";
import './Register.css'
import axios from 'axios';

const Register = () => {
    const navigate =useNavigate()
    const [formData,setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "gender": "",
        "email": "",
        "password": "",
        "date_of_birth": "",
        "phone_number": ""
      })
    console.log("form",formData);
      const handleInputChange = (e) => {
        setFormData( e.target.name, e.target.value)
      }
    
    

  const { register, handleSubmit} = useForm();

 
 const onSubmit = async(data) =>{
    console.log(data);
    await axios.post('https://book-store-node-27us.onrender.com/api/v1/user/register',data)
    .then((res) => console.log(res.data))

      navigate('/login')

  }
//   const onSubmit = async(data) => {
//     const formDataToSend = new FormData();
//       formDataToSend.append('first_name', formData.first_name);
//       formDataToSend.append('last_name', formData.last_name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('password', formData.password);
//       formDataToSend.append('gender', formData.gender);
//       formDataToSend.append('date_of_birth', formData.date_of_birth);
//       formDataToSend.append('phone_number', formData.phone_number);
//     // console.log(data);
//     await axios.post('https://book-store-node-27us.onrender.com/api/v1/user/register',{data})
//     .then((res) => console.log(res.data))
//     // navigate('/login')
//   };

  return (
    <div className='register'>
            <form action="" onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
            <div className='reg-main'>
                <div className='reg-main-one'>
                <div className='reg-head'>
                    <h4>Register</h4>
                </div>
                <div className='reg-body'>
                    <div  className='reg-body-one'>
                    <div className='reg-body-cntnt'>
                        <input type="text" name='first_name' placeholder='first_name'  {...register("first_name")} />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="text" name='last_name' placeholder='last_name'  {...register("last_name")}  />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="text" name='gender' placeholder='gender' {...register("gender")}  />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="email" name='email' placeholder='Email' {...register("email")} />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="password" name='password' placeholder='passoword' {...register("password")}  />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="date" name='date_of_birth' placeholder='date of birth' {...register("date_of_birth")}  />
                    </div>
                    <div className='reg-body-cntnt'>
                        <input type="number" name='phone_number' placeholder='phone_number' {...register("phone_number")}  />
                    </div>
                    
                    <div className='reg-btn'>
                        <button type='submit'>Create Account</button>
                    </div >
                    <div className='reg-para'>
                        <p>Already have an account?<Link to='/login' className='reg-link'>Login</Link></p>
                    </div>
                </div>
                </div>
                </div> 
            </div>
            </form>
        </div>
  )
}

export default Register
