import { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../components/ui/card.jsx';
import { todosContext } from '../pages/Home.jsx';

export default function TodosLayout() {
  const todos = useContext(todosContext);

  return (
    <div className="w-full flex flex-col gap-3 justify-center items-center">
      {todos.map((todo) => {
        return (
          <Card key={todo.Id} className="w-full max-w-md bg-[#F3F4F6]">
            <CardHeader>
              <CardTitle className="font-bold text-lg">
                {todo['Task Name']}
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-[-1rem]">
              <p className=" font-semibold">
                {todo.Deadline !== ''
                  ? `Deadline: ${todo.Deadline}`
                  : 'No Deadline'}
              </p>
              <p className=" text-red-600 font-bold">
                Priority {todo.Priority}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
