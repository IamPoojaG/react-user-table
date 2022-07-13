import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Login from './Login';
import axios from 'axios';

function Registration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const [web, setWeb] = useState('');

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !age ||
      !companyName ||
      !city ||
      !state ||
      !zip ||
      !web
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('Password', JSON.stringify(password));

      setLogin(!login);
    }

    const newPost = {
      first_name: firstName,
      last_name: lastName,
      email,
      age,
      company_name: companyName,
      city,
      state,
      zip,
      password,
      web,
    };

    axios
      .post('https://react-user.herokuapp.com/users/add', newPost)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
      <div>
        {' '}
        {login ? (
          <form className='rigister' onSubmit={handleFormSubmit}>
            <h3>Register</h3>
            {flag && (
              <Alert color='primary' variant='danger'>
                I got it you are in hurry! But every Field is important!
              </Alert>
            )}

            <div className='form-group'>
              <label>FirstName</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter First Name'
                name='firstName'
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>LastName</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Last Name'
                name='lastName'
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Enter email'
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className='form-group '>
              <label>Password</label>
              <input
                type='password'
                className='form-control'
                placeholder='Enter password'
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>Age</label>
              <input
                type='age'
                className='form-control'
                placeholder='Enter age'
                onChange={(event) => setAge(event.target.value)}
              />
            </div>
            <div className='form-group '>
              <label>CompanyName</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Company Name'
                name='companyName'
                onChange={(event) => setCompanyName(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>City</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter city '
                name='city'
                onChange={(event) => setCity(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>State</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter State'
                name='state'
                onChange={(event) => setState(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>Zip</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter Zip code'
                name='zip'
                onChange={(event) => setZip(event.target.value)}
              />
            </div>

            <div className='form-group '>
              <label>Website</label>
              <input
                type='web'
                className='form-control'
                placeholder='Enter website'
                onChange={(event) => setWeb(event.target.value)}
              />
            </div>

            <button type='submit' className='btn btn-dark btn-lg btn-block'>
              Register
            </button>
            <p onClick={handleClick} className='forgot-password text-right'>
              Already registered log in?
            </p>
          </form>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
}

export default Registration;
