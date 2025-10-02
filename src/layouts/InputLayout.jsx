export default function InputLayout({ inputObj }) {
  const inputList = inputObj.map((input, index) => {
    if (input.type == 'select') {
      const options = input.optionsObj;
      return (
        <div key={index} className="flex flex-col gap-1">
          <label className="font-bold">{input.name}</label>
          <select
            id={input.name}
            className="border-2 border-black rounded-md p-1.5"
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
          type={input.type}
          className="border-2 border-black rounded-md p-1.5"
        />
      </div>
    );
  });

  return inputList;
}