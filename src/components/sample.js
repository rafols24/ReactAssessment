


 Swal.fire({
    icon: 'success',
    title: 'Oops...',
    text: 'You have successfully deleted a contact!'
})








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
    const numberCheck = RegExp(/^\d+$/);
    const [errors, setErrors] = useState({
        emptFullname: '',
        emptEmail: '',
        emptNumber: '',
        emptLocation: '',
        emptDate: ''
    });

const validation = (fullname, email, number, location, date) => {
        if (!fullname) {
            errors.emptFullname =" Fullname field cannot be blank!"
           
        } 
        if(!email){
            
        errors.emptEmail = "Email field cannot be blank! "
        }
        
     if(!number){ 
            errors.emptNumber = "Contact Number field cannot be blank! "
    
        }
        
      if(!location){ 
            errors.emptLocation = "Location field cannot be blank! "
    
        }
        
       if(!date){ 
            errors.emptDate = "Registered Date field cannot be blank! "
        } 
     else{
            return errors;
        }
    
    }
    const onSubmit = (e) => {


        if (validation(fullname,email,number,location,date)) {
            onSave(fullname, email, number, location, date)
           

        } else {

            setErrors({ 

                emptFullname: errors.emptFullname ,

                emptEmail: errors.emptEmail,

                emptNumber: errors.emptNumber,

                emptLocation: errors.emptLocation,
                emptDate: errors.emptDate

            })
        e.preventDefault();

      
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
                <p style={{ color: "red" }}>{errors.emptFullname}</p>
                </div>
            <div className="form-control">
                <label>Email Address</label>
                <input type="text" placeholder="example.email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <p style={{ color: "red" }}>{errors.emptEmail}</p>
                </div>
            <div className="form-control">
                <label>Contact Number</label>
                <input type="number" placeholder="09786545675" value={number} onChange={(e) => setNumber(e.target.value)} />
                <p style={{ color: "red" }}>{errors.emptNumber}</p>
                </div>
            <div className="form-control">
                <label>Location</label>
                {/*<input type="text" placeholder="add location" value={location} onChange={(e) => setLocation(e.target.value)} >*/}
                <select name="" id="" value={location} onChange={(e) => setLocation(e.target.value)}>
                    <option value="">Please input your location</option>
                    <option value="Cebu">Cebu</option>
                    <option value="Manila">Manila</option>
                </select>
                <p style={{ color: "red" }}>{errors.emptLocation}</p>
                </div>
            <div className="form-control">
                <label>Registered date</label>
                <input type="date" placeholder="MM/DD/YYY" value={date} onChange={(e) => setDate(e.target.value)} />
                <p style={{ color: "red" }}>{errors.emptDate}</p>
                </div>

            <input type="submit" className="btn btn-block" value="Add Contact" />
        </form>
    )
}

export default AddContact;
