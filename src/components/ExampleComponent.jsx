// src/components/MyComponent.js
import React from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');

    const handleAddTask = () => {
        if (inputValue.trim()) {
            setTasks([...tasks, { id: Date.now(), text: inputValue }]);
            setInputValue('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };
    return (
        <React.Fragment>
        <h1>Me quiero morir de una vez!</h1>
    <div style={{margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
                style={{ padding: '10px', width: '100%', marginBottom: '10px', borderRadius: '4px' }}
            />
            <button onClick={handleAddTask} style={{ padding: '10px', width: '100%', borderRadius: '4px', backgroundColor: '#4CAF50', color: 'white' }}>
                Add Task
            </button>
            <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>{task.text}</span>
                        <button onClick={() => handleDeleteTask(task.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
            {tasks.length === 0 && <p style={{ textAlign: 'center', color: '#888' }}>No tasks yet. Add one above!</p>}
        </div>
        </React.Fragment>
    );
};

export default ToDoList;