/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const paginate = (pageNo) => {
    if (pageNo <= 0 || pageNo > totalPages || pageNo === page) return;
    setPage(pageNo);
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const getUsers = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
      const { data } = res;
      console.log('data.data: ', data.data);
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (err) {
      alert(`Error occurred, try after some time`);
      console.error(err);
    }
  };

  return (
    <div className="user-list">
      <nav className="nav">USER LIST</nav>
      <div className="user-card-cont">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {users.length > 0 && (
        <div className="button__box">
          <button
            className={page > 1 ? '' : 'button__disable'}
            onClick={() => paginate(page - 1)}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? 'active__page' : 'passive__page'}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
          <button
            className={page < totalPages ? '' : 'button__disable'}
            onClick={() => paginate(page + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserList;
