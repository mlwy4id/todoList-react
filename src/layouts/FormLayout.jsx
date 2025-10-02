import InputLayout from './InputLayout.jsx';
import { Button } from '../components/ui/button.jsx';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../components/ui/card.jsx';
import { useState } from 'react';

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

  const [formData, setFormData] = useState(
    inputObjects.reduce((acc, input) => {
      acc[input.name] =
        input.name === 'Priority' ? input.optionsObj[0].value : '';
      return acc;
    }, {})
  );

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Add Task to Your List</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
            setFormData(
              inputObjects.reduce((acc, input) => {
                acc[input.name] =
                  input.name === 'Priority' ? input.optionsObj[0].value : '';
                return acc;
              }, {})
            );
          }}
        >
          <div className="flex flex-col gap-3">
            <InputLayout
              formData={formData}
              setFormData={setFormData}
              inputObj={inputObjects}
            />
          </div>
          <Button variant={'default'} type="submit" className="w-full mt-6">
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
