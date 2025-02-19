import { useSelector } from 'react-redux';
import { Task } from '../Task/Task';
import { selectVisibleTasks } from '../../redux/selectors';
import css from './TaskList.module.css';

export const TaskList = () => {
    const tasks = useSelector(selectVisibleTasks);

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};
