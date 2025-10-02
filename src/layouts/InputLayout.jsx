import { useState } from 'react';

export default function InputLayout({ formData, setFormData, inputObj }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputList = inputObj.map((input, index) => {
    if (input.type == 'select') {
      const options = input.optionsObj;
      return (
        <div key={index} className="flex flex-col gap-1">
          <label className="font-bold">{input.name}</label>
          <select
            id={input.name}
            name={input.name}
            className="border-2 border-black rounded-md p-1.5"
            onChange={handleChange}
            value={formData[input.name]}
          >
            {options.map((option, i) => {
              return (
                <option key={i} value={option.value}>
                  {option.name}
                </option>
              );
            })}
          </select>
        </div>
      );
    }

    return (
      <div key={index} className="flex flex-col gap-1">
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
