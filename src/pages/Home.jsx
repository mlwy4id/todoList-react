import FormLayout from '../layouts/FormLayout.jsx';

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center m-5">
      <h1 className="">To-Do List</h1>
      <FormLayout />
    </div>
  );
}
