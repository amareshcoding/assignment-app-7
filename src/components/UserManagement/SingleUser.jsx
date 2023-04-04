/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const initialValues = {
  first_name: '',
  last_name: '',
  email: '',
};

const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser();
  }, [id]);

  const getUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      const { data } = res;
      setUser(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  //UPDATE USER
  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const [formInput, setFormInput] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //all fields are need to be field
    if (!formInput.first_name || !formInput.last_name || !formInput.email) {
      alert('Please fill all the fields!');
      return;
    }

    //first name validation
    if (formInput.first_name.length < 3 || formInput.first_name.length > 50) {
      alert('first name must be between 3 to 50 character!');
      return;
    }

    //last name validation
    if (formInput.last_name.length < 3 || formInput.last_name.length > 50) {
      alert('last name must be between 3 to 50 character!');
      return;
    }

    //email validation
    if (!emailRegex.test(formInput.email)) {
      alert('Email is not correct, try a correct email!');
      return;
    }

    try {
      const res = await axios.put(
        `https://reqres.in/api/users/${id}`,
        formInput
      );
      const { data } = res;

      setUser({
        ...user,
        ...data,
      });

      alert(`User Updated Successfully!`);
    } catch (err) {
      alert(`Error occurred, try after some time`);
      console.error(err);
    }

    setFormInput(initialValues);
  };

  return (
    <div>
      <nav className="nav">SELECTED USER & UPDATE</nav>
      <div className="user-container">
        <div className="user-details">
          <img src={user.avatar} alt="UserImage" />
          <h4>
            {user.first_name} {user.last_name}
          </h4>
          <p>{user.email}</p>
        </div>

        <div className="user-reg-form">
          <h2 className="update-user-h">UPDATE USER</h2>
          <form className="user-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <input
                className="text-input"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter new first name"
                value={formInput.first_name}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div className="input-field">
              <input
                className="text-input"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter new last name"
                value={formInput.last_name}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div className="input-field">
              <input
                className="text-input"
                type="text"
                id="email"
                name="email"
                placeholder="Enter new email"
                value={formInput.email}
                onChange={changeHandler}
              />
              <br />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
