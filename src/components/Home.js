import Header from './Header';
import AddContact from './AddContact';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import Pagination from './pagination';

function App() {
    // All States
    const [loading, setloading] = useState(true); // Pre-loader before page renders
    const [contacts, setContacts] = useState([]); // Contacts State
    const [showAddContact, setShowAddContact] = useState(false);// To reveal add add form

    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
            setloading(false);
        }, 3000);
    }, [])

    // Fetching from Local Storage
    const getContacts = JSON.parse(localStorage.getItem("ContactAdded"));

    useEffect(() => {
        if (getContacts == null) {
            setContacts([])
        } else {
            setContacts(getContacts);
        }
    }, [])

    // Add Contact
    const addContact = (contact) => {
        const id = uuidv4();
        const newContact = { id, ...contact }

        setContacts([...contacts, newContact]);

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new task!'
        })

        localStorage.setItem("ContactAdded", JSON.stringify([...contacts, newContact]));
    }



    // Delete a specific Contact
    const deleteContact = (id) => {
        const deleteContact = contacts.filter((contact) => contact.id !== id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure to delete the record?',
            text: "cannot retrieve data",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                setContacts(deleteContact);
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your contact is safe :)',
                    'error'
                )
            }
        })
        localStorage.setItem("ContactAdded", JSON.stringify(deleteContact));
    }
    const editContacts = (id) => {
        const fullname = prompt("Edit your Fullname");
        const email = prompt("Edit your Email Address");
        const number = prompt("Edit your Contact Number");
        const location = prompt("Edit your Location");
        const date = prompt("Edit Registered date");
        let data = JSON.parse(localStorage.getItem('ContactAdded'));

        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    id: uuidv4(),
                    fullname: fullname,
                    email: email,
                    number: number,
                    location: location,
                    date: date,

                }
            }
            return x;
        })

        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited an existing task!'
        })

        localStorage.setItem("ContactAdded", JSON.stringify(myData));
        window.location.reload();
    }
    return (
        <>
            {
                loading
                    ?
                    <div className="spinnerContainer">
                        <div className="spinner-grow text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <div className="container">

                        {/* App Header that has open and App Name */}
                        <Header showForm={() => setShowAddContact(!showAddContact)} changeTextAndColor={showAddContact} />

                        {/* Revealing of contacts Task Form */}
                        {showAddContact && <AddContact onSave={addContact} />}

                        {/* Contacts Counter */}
                        {<h3>Number of Contacts: {contacts.length}</h3>}

                        {/* Displaying of Contacts */}
                        {
                            contacts.length > 0
                                ?
                                (<Pagination contacts={contacts} onDelete={deleteContact} />)
                                :
                                (' No Contacts Found!')
                        }
                    </div>
            }

        </>
    )
}

export default App