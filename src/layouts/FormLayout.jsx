import InputLayout from './InputLayout.jsx';
import { Button } from '../components/ui/button.jsx';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '../components/ui/card.jsx';

export default function FormLayout({
  formData,
  setFormData,
  inputObjects,
  setTodos,
}) {
  return (
    <Card className="w-full max-w-sm bg-[#F3F4F6]">
      <CardHeader>
        <CardTitle>Add Task to Your List</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setTodos((prev) => {
              return [...prev, formData];
            });

            setFormData(
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
