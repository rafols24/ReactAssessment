import { useState } from 'react';
import Swal from "sweetalert2";

const AddContact = ({ onSave }) => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if (!fullname || !date || !email || !number || !location) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Make sure you fill it up completely!'
            })
        } else {
            onSave({ fullname, email, number, location, date });
        }

        setFullName('');
        setEmail('');
        setNumber('');
        setLocation('');
        setDate('');
    }

    return (
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
                {/*<input type="text" placeholder="add location" value={location} onChange={(e) => setLocation(e.target.value)} >*/}
                <select name="" id="" value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value=""></option>
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
