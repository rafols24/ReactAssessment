import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ShowContacts from "./components/ShowContacts";
import EditContacts from './components/EditContacts';
import Home from "./components/Home";


function App() {
  return (
    <div><Router>
      <div>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/EditContacts' component={EditContacts} />
                <Route path="/ShowContact" component={ShowContacts} />
              </Switch>
      </div>
  </Router>
  
 
</div>
  );

 
}








// import Header from './components/Header';
// import Tasks from './components/Tasks';
// import AddTask from './components/AddTask';
// import { useState, useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import Swal from "sweetalert2";

// function App() {
//     // All States
//     const [loading, setloading] = useState(true); // Pre-loader before page renders
//     const [tasks, setTasks] = useState([]); // Task State
//     const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form

//     // Pre-loader
//     useEffect(() => {
//         setTimeout(() => {
//             setloading(false);
//         }, 3500);
//     }, [])

//     // Fetching from Local Storage
//     const getContacts = JSON.parse(localStorage.getItem("ContactAdded"));

//     useEffect(() => {
//         if (getContacts == null) {
//             setTasks([])
//         } else {
//             setTasks(getContacts);
//         }
//         // eslint-disable-next-line
//     }, [])

//     // Add Task
//     const addTask = (task) => {
//         const id = uuidv4();
//         const newTask = { id, ...task }

//         setTasks([...tasks, newTask]);

//         Swal.fire({
//             icon: 'success',
//             title: 'Yay...',
//             text: 'You have successfully added a new task!'
//         })

//         localStorage.setItem("ContactAdded", JSON.stringify([...tasks, newTask]));
//     }

//     // Delete Task
//     const deleteTask = (id) => {
//         const deleteTask = tasks.filter((task) => task.id !== id);

//         setTasks(deleteTask);

//         Swal.fire({
//             icon: 'success',
//             title: 'Oops...',
//             text: 'You have successfully deleted a contact!'
//         })

//         localStorage.setItem("ContactAdded", JSON.stringify(deleteTask));
//     }

//     // Edit Task
//     const editTask = (id) => {

//         const fullname = prompt("Full Name");
//         const email = prompt("Email Address");
//         const number = prompt("Contact Number");
//         const location = prompt("Location");
//         const date = prompt("Registered date");
//         let data = JSON.parse(localStorage.getItem('ContactAdded'));

//         const myData = data.map(x => {
//             if (x.id === id) {
//                 return {
//                     ...x,
//                     id: uuidv4(),
//                     fullname: fullname,
//                     email: email,
//                     number: number,
//                     location: location,
//                     date: date,
                    
//                 }
//             }
//             return x;
//         })

//         Swal.fire({
//             icon: 'success',
//             title: 'Yay...',
//             text: 'You have successfully edited an existing task!'
//         })

//         localStorage.setItem("ContactAdded", JSON.stringify(myData));
//         window.location.reload();
//     }
//     return (
//         <>
//            { /*<Router>
//                 <Container>
//                     <Switch>
//                         <Route path='./ShowContact' component={ShowContact} />
//                     </Switch>
//                 </Container>
//             </Router>
//            */}

//             {
//                 loading
//                     ?
//                     <div className="spinnerContainer">
//                         <div className="spinner-grow text-primary" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-secondary" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-success" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-danger" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                         <div className="spinner-grow text-warning" role="status">
//                             <span className="visually-hidden">Loading...</span>
//                         </div>
//                     </div>
//                     :
//                     <div className="container">
//                         {/* App Header that has open and App Name */}
//                         <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

//                         {/* Revealing of Add Task Form */}
//                         {showAddTask && <AddTask onSave={addTask} />}

//                         {/* Task Counter */}
//                         { <h3>Number of Contacts: {tasks.length}</h3>}

//                         {/* Displaying of Tasks */}
//                         {
//                             tasks.length > 0
//                                 ?
//                                 (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
//                                 :
//                                 (' No Contacts Found!')
//                         }
//                     </div>
//                     }
//         </>
//     )
// }

// export default App

{/*--------------------------------------------------------------------------------*/}




export default App;
