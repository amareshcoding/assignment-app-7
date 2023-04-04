import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ user }) => {
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate(`/user/single-user/${user.id}`);
  };

  return (
    <div className="user-card" onClick={routeHandler}>
      <img src={user.avatar} alt="userImage" />
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <p>{user.email}</p>
    </div>
  );
};

export default UserCard;
