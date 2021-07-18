import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <div class="tasks">
        {tasks.map((task, _id) => (
        <Task key={task._id} task={task} onDelete={onDelete} onToggle={onToggle} />
         ))}
        
        </div>
    )
}

export default Tasks
