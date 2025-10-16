import { useContext } from 'react';
import { formContext } from '../pages/Home';

export default function InputLayout() {
  const { formData, setFormData, inputObjects } = useContext(formContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputList = inputObjects.map((input) => {
    if (input.name == 'Id') {
      return;
    }

    if (input.type == 'select') {
      const options = input.optionsObj;
      return (
        <div key={input.id} className="flex flex-col gap-1">
          <label className="font-bold">{input.name}</label>
          <select
            id={input.name}
            name={input.name}
            className="border-2 border-black rounded-md p-1.5"
            onChange={handleChange}
            value={formData[input.name]}
          >
            {options.map((option) => {
              return (
                <option key={option.id} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
      );
    }

    return (
      <div key={input.id} className="flex flex-col gap-1">
        <label className="font-bold">{input.name}</label>
        <input
          id={input.name}
          name={input.name}
          type={input.type}
          className="border-2 border-black rounded-md p-1.5"
          onChange={handleChange}
          value={formData[input.name]}
        />
      </div>
    );
  });

  return inputList;
}
