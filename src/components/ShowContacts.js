
import { Link } from 'react-router-dom';
import '../index.css';


const View = (props) => {

    console.log(props);
    const Contacts = JSON.parse(localStorage.getItem("ContactAdded"));
    console.log(Contacts);
    const contact = Contacts.find(contact => contact.id === props.match.params.id);

    console.log(contact);


    return (
        <div className="container">
            <br />
            <form className="show-form">
                <div className="form-control">
                    <label >ID</label>
                    {<p>{contact.id}</p>}
                </div>
                <div className="form-control">
                    <label >Full Name</label>
                    {<p>{contact.fullname}</p>}
                </div>
                <div className="form-control">
                    <label>Email Address</label>
                    {<p>{contact.email}</p>}
                </div>
                <div className="form-control">
                    <label>Contact Number</label>
                    {<p>{contact.number}</p>}
                </div>
                <div className="form-control">
                    <label>Location</label>
                    {<p>{contact.location}</p>}
                </div>
                <div className="form-control">
                    <label>Registered date</label>
                    {<p>{contact.date}</p>}
                </div>

                <Link exact to='/'><button type="onclick" className="btn btn-block" value="Add Contact"  >Back</button></Link>
            </form>
        </div>
    )
}


export default View;
