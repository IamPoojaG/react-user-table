import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details';
import Table from './components/Table';

import axios from 'axios';

function App() {
  const [userDetails, setUserDetails] = useState([]);

  const viewDetails = (id) => {
    axios
      .get(`http://localhost:5000/users/${id}`)
      .then((res) => setUserDetails(res.data.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route Exact path='/' element={<Registration />}></Route>
          <Route
            Exact
            path='/users'
            element={<Table viewDetails={viewDetails} />}
          ></Route>
          <Route
            Exact
            path='/users/:id'
            element={
              <Details viewDetails={viewDetails} userDetails={userDetails} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
