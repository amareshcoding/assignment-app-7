import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  comment: '',
};

const EventReg = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState({});

  useEffect(() => {
    const event = JSON.parse(localStorage.getItem('event'));
    setSelectedEvent(event);
  }, []);

  const emailRegex =
    // eslint-disable-next-line no-useless-escape
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // eslint-disable-next-line no-useless-escape
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

  const [formInput, setFormInput] = useState(initialValues);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //all fields are need to be field
    if (
      !formInput.name ||
      !formInput.email ||
      !formInput.phone ||
      !formInput.comment
    ) {
      alert('Please fill all the fields!');
      return;
    }

    //name validation
    if (formInput.name.length < 3 || formInput.name.length > 50) {
      alert('Name must be between 3 to 50 character!');
      return;
    }

    //email validation
    if (!emailRegex.test(formInput.email)) {
      alert('Email is not correct, try a correct email!');
      return;
    }

    //phone validation
    if (!phoneRegex.test(formInput.phone)) {
      alert('Phone is not correct, try a correct phone!');
      return;
    }

    localStorage.setItem('eventRegistration', JSON.stringify(formInput));
    setFormInput(initialValues);
    navigate('/event/register/confirmation');
  };

  return (
    <div className="event-reg">
      <nav className="nav">EVENT REG</nav>
      <div className="container">
        <div className="event-details">
          <div className="event-details-card">
            <h4>{selectedEvent.title}</h4>
            <p>{selectedEvent?.description}</p>
            <p>{selectedEvent.date}</p>
          </div>
        </div>

        <div className="event-reg-form">
          <form className="event-form" onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="name">Name</label> <br />
              <input
                className="text-input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name..."
                value={formInput.name}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label> <br />
              <input
                className="text-input"
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email..."
                value={formInput.email}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div className="input-field">
              <label htmlFor="phone">Phone</label> <br />
              <input
                className="text-input"
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter your Phone..."
                value={formInput.phone}
                onChange={changeHandler}
              />
              <br />
            </div>
            <div className="input-field">
              <label htmlFor="comment">Comments</label> <br />
              <textarea
                className="text-input"
                id="comment"
                name="comment"
                cols="30"
                rows="10"
                placeholder="Enter your Comments..."
                value={formInput.comment}
                onChange={changeHandler}
              ></textarea>
              <br />
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventReg;
// name, email, phone numb
// er, and any additional comments.
