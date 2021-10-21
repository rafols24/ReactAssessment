import { useState } from 'react';
import Swal from "sweetalert2";

const AddContact = ({ onSave }) => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState(new Date());
    const fullnameCheck = RegExp(/^[aA-zZ\s]+$/);
    const numberCheck = RegExp(/^\d+$/);
    const emailCheck = RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    const today = new Date();
    const currentDate = today.getFullYear() + "-" + (today.getMonth() > 8 ? today.getMonth() + 1 : "0" + (today.getMonth() + 1)) + "-" + (today.getDate() > 9 ? today.getDate() : "0" + today.getDate());


    const onSubmit = (e) => {

        e.preventDefault();
        if (!fullname && !date && !email && !number && !location) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields cannot be blank!'
            })

        } else if (!fullname) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'fullname field Could not be empty'
            })

        } else if (!fullnameCheck.test(fullname)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fullname field accepts characters values only!'
            })


        } else if (fullname.length >= 31) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fullname field accepts up to 30 in size only!'
            })
        }
        else if (!email) {
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
        } else if (!emailCheck.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email field accepts only proper domain!'
            })
        } else if (!number) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'number field could not be empty'
            })

        }
        else if (!number >= 12) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Number must be 11 in size!'
            })
        } else if (!numberCheck.test(number)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Contact Number field accepts number only!'
            })
        } else if (!location) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Location field cannot be blank'
            })
        } else if (!date) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Registered date field cannot be blank'
            })
        } else if (currentDate !== date) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Registered date must be today!'
            })
        }
        else {
            onSave({ fullname, email, number, location, date });
        }

        setFullName('');
        setEmail('');
        setNumber('');
        setLocation('');
        setDate('');
    }

    return (  // Add Contact Form
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Full Name</label>
                <input type="text" placeholder="LastName, FirstName, M.I" value={fullname} onChange={(e) => setFullName(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Email Address</label>
                <input type="text" placeholder="example.email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Contact Number</label>
                <input type="number" placeholder="09786545675" value={number} onChange={(e) => setNumber(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Location</label>
                <select name="" id="" value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Please input your location</option>
                    <option value="Cebu">Cebu</option>
                    <option value="Manila">Manila</option>
                </select>
            </div>
            <div className="form-control">
                <label>Registered date</label>
                <input type="date" placeholder="MM/DD/YYY" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <input type="submit" className="btn btn-block" value="Add Contact" />

        </form>
    )
}

export default AddContact;