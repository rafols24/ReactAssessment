import Task from './Task';
import "../index.css";

const Tasks = ({ tasks, onDelete, onEdit, onShow }) => {
    return (
        <div>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} onShow={onShow} />))};
            </div>
            
    )
   
}


export default Tasks;
