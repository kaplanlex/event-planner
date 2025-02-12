import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';

export const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div >
            <input
                type="checkbox"

                checked={task.completed}
                onChange={handleToggle}
            />
            <p >{task.text}</p>
            <button onClick={handleDelete}>
                <MdClose size={24} />
            </button>
        </div>
    );
};
