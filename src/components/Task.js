import { Link } from 'react-router-dom';
import { FaEye, FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Task = ({ task, onDelete, onEdit, }) => {

    
    return (      
                    <tr>
                        <td>{task.id}</td>
                        <td>{task.fullname}</td>
                        <td>{task.email}</td>
                        <td>{task.number}</td>
                        <td>{task.location}</td>
                        <td>{task.date}</td>
                        <td>
                        
                        <Link exact to={`/ShowContacts/${task.id}`}><FaEye onClick={(task.id)} className="editIcon" /></Link>&nbsp;
                        <FaTimes onClick={() => onDelete(task.id)} className="delIcon" /> &nbsp;
                        <Link to="./EditContacts"><FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" /></Link>
                        </td>
                        </tr>  
      
    )
}

export default Task;
