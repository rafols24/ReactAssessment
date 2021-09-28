import { useState } from 'react';
import Swal from "sweetalert2";

const AddContact = ({ onSave }) => {
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const fullnameCheck = RegExp(/^[aA-zZ\s]+$/);
    const emailCheck = RegExp(/^([A-Za-z\d.-]+)@([A-Za-z\d]+)\.([A-Za-z]{2,45})$/)
    const numberCheck = RegExp(/^\d+$/)

    const onSubmit = (e) => {
        e.preventDefault();

        if (!fullname && !date && !email && !number && !location) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields cannot be blank!'
            })
           
        } else  if(!fullnameCheck.test(fullname)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fullname field accepts characters values only!'
            })
        } else if(!fullname.length >= 31){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fullname field accepts up to 30 in size only!'
            })
        } else if (!email.length >= 45){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fullname field accepts up to 45 in size only!'
            }) 
        }else if (!emailCheck.test(email)){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email field accepts only proper domain!'
                })
        }
        else if (!number>=12){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email field accepts only proper domain!'
            })
        } else if (!numberCheck.test(number)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email field accepts only proper domain!'
            })
        }else {
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
