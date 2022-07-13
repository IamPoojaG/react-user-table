import React from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = ({ userDetails }) => {
  let navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <div className='container_inner'>
          <div className='heading_details'>
            <h2>User Details</h2>
            <a
              href=''
              onClick={() => {
                navigate(`/users`);
              }}
            >
              Back to table
            </a>
          </div>

          <div className='user_container'>
            <p>Name : {userDetails.first_name + ' ' + userDetails.last_name}</p>
            <p>Age : {userDetails.age}</p>
            <p>City : {userDetails.city}</p>
            <p>State : {userDetails.state}</p>
            <p>Company Name : {userDetails.company_name}</p>
            <p>Website : {userDetails.web}</p>
            <p>Zip : {userDetails.zip}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
