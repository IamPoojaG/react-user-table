import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ user, deletePost, viewDetails }) => {
  let navigate = useNavigate();

  return (
    <>
      <tr>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.city}</td>
        <td>{user.state}</td>
        <td>{user.zip}</td>
        <td>
          <a href={user.web} target='_blank'>
            {user.web}
          </a>
        </td>
        <td>
          <a
            onClick={() => {
              deletePost(user._id);
            }}
          >
            Delete
          </a>
        </td>
        <td
          onClick={() => {
            navigate(`/users/${user._id}`);
          }}
        >
          <a
            onClick={() => {
              viewDetails(user._id);
            }}
          >
            View
          </a>
        </td>
      </tr>
    </>
  );
};

export default Post;
