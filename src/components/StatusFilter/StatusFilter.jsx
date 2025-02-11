// src/components/StatusFilter/StatusFilter.jsx

// 1. Імпортуємо хук
import { useSelector } from "react-redux";

export const StatusFilter = () => {
    // 2. Отримуємо значення фільтра із стану Redux
    const filter = useSelector(state => state.filters.status);

    return (
        <div>
            <button>All {filter === "all" && "is active"}</button>
            <button>Active {filter === "active" && "is active"}</button>
            <button>Completed {filter === "completed" && "is active"}</button>
        </div>
    );
};
