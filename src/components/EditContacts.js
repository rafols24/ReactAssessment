// import { useState } from 'react';
// import Swal from "sweetalert2";
// import { v4 as uuidv4 } from 'uuid';

//     const editTask = (id) => {

//         <form className="add-form" onSubmit={onSubmit}>
//         <div className="form-control">
//             <label>Full Name</label>
//             <input type="text" placeholder="LastName, FirstName, M.I" value={fullname}  />
//         </div>
//         <div className="form-control">
//             <label>Email Address</label>
//             <input type="text" placeholder="example.email.com" value={email} />
//         </div>
//         <div className="form-control">
//             <label>Contact Number</label>
//             <input type="number" placeholder="09786545675" value={number}/>
//         </div>
//         <div className="form-control">
//             <label>Location</label>
//             {/*<input type="text" placeholder="add location" value={location} onChange={(e) => setLocation(e.target.value)} >*/}
//             <select name="" id="" value={location}>
//                 <option value=""></option>
//                 <option value="Cebu">Cebu</option>
//                 <option value="Manila">Manila</option>
//             </select>
//         </div>
//         <div className="form-control">
//             <label>Registered date</label>
//             <input type="date" placeholder="MM/DD/YYY" value={date} />
//         </div>

//         <input type="submit" className="btn btn-block" value="Update " />
//     </form>





//     // const fullname = prompt("Full Name");
//     // const email = prompt("Email Address");
//     // const number = prompt("Contact Number");
//     // const location = prompt("Location");
//     // const date = prompt("Registered date");
//     let data = JSON.parse(localStorage.getItem('ContactAdded'));

//     const myData = data.map(x => {
//         if (x.id === id) {
//             return {
//                 ...x,
//                 id: uuidv4(),
//                 fullname: fullname,
//                 email: email,
//                 number: number,
//                 location: location,
//                 date: date,
                
//             }
//         }
//         return x;
//     })

//     Swal.fire({
//         icon: 'success',
//         title: 'Yay...',
//         text: 'You have successfully edited an existing task!'
//     })

//     localStorage.setItem("ContactAdded", JSON.stringify(myData));
//     window.location.reload();
// }





// export default editTask;