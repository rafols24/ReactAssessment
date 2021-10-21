import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
const numberCheck = RegExp(/^\d+$/);
const emailCheck = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

const EditForm = (props) => {
  const [contact, setContact] = useState(() => {
    return {
      fullname: props.contact ? props.contact.fullname : '',
      email: props.contact ? props.contact.email : '',
      number: props.contact ? props.contact.number : '',
      location: props.contact ? props.contact.location : '',
      date: props.contact ? props.contact.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { fullname, email, number, location, date } = contact;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [fullname, email, number, location, date];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (!email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'email field Could not be blank'
      })

    } else if (!email.length >= 45) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fullname field accepts up to 45 in size only!'
      })
    }
    else if (!emailCheck.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email field accepts only proper domain!'
      })
    }else  if(!number){
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'number field could not be empty'
      })
  
  }  else if (!number>=12){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Number must be 11 in size!'
    })
} else if (!numberCheck.test(number)){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Number field accepts number only!'
    })
}else if(!location){
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Location field cannot be blank'
  })
} 
else if(allFieldsFilled){
      const contact = {
        id: uuidv4(),
        fullname,
        email,
        number,
        location,
        date,
      };
      Swal.fire({
        icon: 'success',
        title: 'Yay',
        text: 'updated'
      })
      props.handleOnSubmit(contact);
    }
    
    else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'A':
        if (value === '' || parseInt(value) === +value) {
          setContact((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'B':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setContact((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setContact((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form className="add-form" onSubmit={handleOnSubmit}>
        <Form.Group>
          <Form.Label>FullName</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="fullname"
            value={fullname}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="email"
            value={email}
            placeholder="Enter your email Address"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="number"
            value={number}
            placeholder="Enter contact number"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Location</Form.Label><br />
          <select name="location" value={location} onChange={handleInputChange}>
            <option value="">Please input your location</option>
            <option value="Cebu">Cebu</option>
            <option value="Manila">Manila</option>
          </select>
          
        </Form.Group>
        <Form.Group>
          <Form.Label>Registered date</Form.Label>
          <Form.Control
            className="input-control"
            type="date"
            name="date"
            value={date}
            onChange={handleInputChange}
            disabled
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditForm;