import React, { useState, useEffect } from 'react';
import Post from './Post';
import Pagination from './Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Details.css';

function Table({ viewDetails }) {
  const [user, setUser] = useState([]);
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);
  const [order, setOrder] = useState('ASC');
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://react-user.herokuapp.com/users')
      .then((res) => setUser(res.data.users))
      .catch((err) => console.log(err));
  }, []);
  // get the current users
  const indexOfLastPost = currentPage * postPerPage;
  // console.log(indexOfLastPost)
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  // console.log(indexOfFirstPost)
  const currentPosts = user.slice(indexOfFirstPost, indexOfLastPost);
  let totalPosts = user.length;
  // console.log(currentPosts)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const deletePost = (id) => {
    setUser(user.filter((user) => user._id !== id));
    axios
      .delete(`https://react-user.herokuapp.com/users/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const searching = () => {
    const searchedData = user.filter((value) => {
      if (
        value.first_name.toLowerCase().includes(search.toLowerCase()) ||
        value.last_name.toLowerCase().includes(search.toLowerCase())
      )
        return value;
    });
    setUser(searchedData);
  };
  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...user].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUser(sorted);
      setOrder('ASC');
    }
  };
  return (
    <>
      <div className='table_container'>
        <div className='heading'>
          <div className='title'>
            <h1 className='header'>Users</h1>
            <a
              className='logout'
              href=''
              onClick={() => {
                navigate(`/`);
              }}
            >
              Logout
            </a>
          </div>

          <form
            className='d-flex input-group w-100vw'
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type='text'
              placeholder='Search for first name and last name'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className='mx-3 searchBtn'
              type='button'
              onClick={() => searching()}
            >
              Search
            </button>
          </form>
        </div>

        <div className='row w-100'>
          <div className='col mb-3 col-12 text-center'>
            <table className='table table-bordered'>
              <thead>
                <th onClick={() => sorting('first_name')}>First Name</th>
                <th onClick={() => sorting('last_name')}>Last Name</th>
                <th>Age</th>
                <th onClick={() => sorting('email')}>Email</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Web</th>
                <th>Action</th>
                <th>Action</th>
              </thead>

              <tbody>
                {currentPosts.map((data) => {
                  return (
                    <Post
                      key={data.id}
                      deletePost={deletePost}
                      viewDetails={viewDetails}
                      user={data}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
          <Pagination
            postPerPage={postPerPage}
            totalPosts={totalPosts}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}

export default Table;
