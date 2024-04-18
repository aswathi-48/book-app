import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import * as Yup from 'yup'; // Import Yup
import { yupResolver } from '@hookform/resolvers/yup';


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: '',
    date_of_birth: '',
    phone_number: ''
  });

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    date_of_birth: Yup.date().required('Date of birth is required').max(new Date(), 'Date of birth cannot be in the future'),
    phone_number: Yup.number().required('Phone number is required')
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema) // Integrate Yup with react-hook-form
  });

  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post('https://book-store-node-27us.onrender.com/api/v1/user/register', data)
      .then((res) => console.log(res.data));
    navigate('/login');
  };

  return (
    <div className='register'>
      <form action='' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div className='reg-main'>
          <div className='reg-main-one'>
            <div className='reg-head'>
              <h4>Register</h4>
            </div>
            <div className='reg-body'>
              <div className='reg-body-one'>
                <div className='reg-body-cntnt'>
                  <input type='text' name='first_name' placeholder='first_name' {...register('first_name')} />
                  {errors.first_name && <p>{errors.first_name.message}</p>}
                </div>
                <div className='reg-body-cntnt'>
                  <input type='text' name='last_name' placeholder='last_name' {...register('last_name')} />
                  {errors.last_name && <p>{errors.last_name.message}</p>}
                </div>
                <div className='reg-body-cntnt'>
  <div className='gender-radio-buttons'>
    <label>
      <input type='radio' name='gender' value='male' {...register('gender')} />
      Male
    </label>
    <label>
      <input type='radio' name='gender' value='female' {...register('gender')} />
      Female
    </label>
    <label>
      <input type='radio' name='gender' value='transgender' {...register('gender')} />
      Transgender
    </label>
  </div>
  {errors.gender && <p>{errors.gender.message}</p>}
</div>

                <div className='reg-body-cntnt'>
                  <input type='email' name='email' placeholder='Email' {...register('email')} />
                  {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className='reg-body-cntnt'>
                  <input type='password' name='password' placeholder='password' {...register('password')} />
                  {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className='reg-body-cntnt'>
                  <input type='date' name='date_of_birth' placeholder='date of birth' {...register('date_of_birth')} />
                  {errors.date_of_birth && <p>{errors.date_of_birth.message}</p>}
                </div>
                <div className='reg-body-cntnt'>
                  <input type='number' name='phone_number' placeholder='phone_number' {...register('phone_number')} />
                  {errors.phone_number && <p>{errors.phone_number.message}</p>}
                </div>

                <div className='reg-btn'>
                  <button type='submit'>Create Account</button>
                </div>
                <div className='reg-para'>
                  <p>
                    Already have an account?<Link to='/login' className='reg-link'>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
