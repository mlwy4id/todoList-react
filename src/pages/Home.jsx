import FormLayout from '../layouts/FormLayout.jsx';
import TodosLayout from '../layouts/TodosLayout.jsx';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const inputObjects = [
    { name: 'Id' },
    { name: 'Task Name', type: 'text', id: 'taskName' },
    { name: 'Deadline', type: 'date', id: 'deadline' },
    {
      name: 'Priority',
      type: 'select',
      optionsObj: [
        { name: 1, value: '1', id: 'priority1' },
        { name: 2, value: '2', id: 'priority2' },
        { name: 3, value: '3', id: 'priority3' },
        { name: 4, value: '4', id: 'priority4' },
      ],
      id: 'priority',
    },
  ];

  const [formData, setFormData] = useState(
    inputObjects.reduce((acc, input) => {
      if (input.name === 'Id') {
        acc[input.name] = crypto.randomUUID();
      } else if (input.name === 'Priority') {
        acc[input.name] = input.optionsObj[0].value;
      } else {
        acc[input.name] = '';
      }

      return acc;
    }, {})
  );
  const [todos, setTodos] = useState([]);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-evenly m-5">
      <div className="w-[40%] flex flex-col gap-5 items-center">
        <h1>Add New Task</h1>
        <FormLayout
          formData={formData}
          setFormData={setFormData}
          inputObjects={inputObjects}
          setTodos={setTodos}
          todos={todos}
        />
      </div>
      <div className="w-[40%] flex flex-col gap-5 items-center">
        <h1>Tasks List</h1>
        <TodosLayout todos={todos} />
      </div>
    </div>
  );
}
