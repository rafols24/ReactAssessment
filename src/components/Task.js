import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit, onShow }) => {
    return (
        <div>

            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Location</th>
                        <th scope="col">Registered Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
        
                <tbody>
                        <td>{task.id}</td>
                        <td>{task.fullname}</td>
                        <td>{task.email}</td>
                        <td>{task.number}</td>
                        <td>{task.location}</td>
                        <td>{task.date}</td>
                        <td>
                            <p><FaEye onClick={() => onShow(task.id)} className="editIcon" />&nbsp;<FaTimes onClick={() => onDelete(task.id)} className="delIcon" /> &nbsp;<FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></p>
                        </td>
                  
                </tbody>
            </table>




        </div>
    )
}

export default Task
