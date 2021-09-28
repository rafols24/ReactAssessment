
import { Link } from 'react-router-dom';
import { Task } from './Task';
import { v4 as uuidv4 } from 'uuid';


const View = () => {
    const id = uuidv4();
   const Contacts = JSON.parse(localStorage.getItem("ContactAdded"));
   const contact = Contacts.find(contact => contact.id === "7f18c98b-d3bc-45e2-a7b8-2f03d2dacafd")
   
    console.log(contact);
    // alert(contacts.map((task) => (<Task key={task.id}/>)))   


    return (
        <div>
        <br/>
        
        <form className="add-form">
            <div className="form-control">
                <label>Full Name</label>
         {<p>{contact.fullname}</p>};
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
