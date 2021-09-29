
import { Link } from 'react-router-dom';


const View = (props) => {

   console.log(props);
   const Contacts = JSON.parse(localStorage.getItem("ContactAdded"));
   console.log(Contacts);
   const contact = Contacts.find(contact => contact.id === props.match.params.id);
   
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
