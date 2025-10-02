import InputLayout from './InputLayout.jsx';
import { Button } from '../components/ui/button.jsx';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '../components/ui/card.jsx';

export default function FormLayout() {
  const inputObjects = [
    { name: 'Task Name', type: 'text' },
    { name: 'Deadline', type: 'date' },
    {
      name: 'Priority',
      type: 'select',
      optionsObj: [
        { name: 1, value: 'priorityOne' },
        { name: 2, value: 'priorityTwo' },
        { name: 3, value: 'priorityThree' },
        { name: 4, value: 'priorityFour' },
      ],
    },
  ];

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Task to Your List</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('form tersubmit uy');
          }}
        >
          <div className="flex flex-col gap-3">
            <InputLayout inputObj={inputObjects} />
          </div>
          <Button variant={'default'} type="submit" className="w-full mt-6">
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
