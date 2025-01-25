import { useState } from 'react';

export default function AddNewNote({ setNotes }) {
  // ! Control statements
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title||!description) return null;
    const newNote = {
      id: Date.now(),
      title,
      description,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTitle('');
    setDescription('');
    setNotes((prevNotes) => [...prevNotes, newNote]);
   
  };
  return (
    <div className="bg-white border border-gray-100 shadow-md overflow-hidden rounded-lg md:col-span-4 md:row-span-4 max-h-96">
      <form
        onSubmit={handleSubmit}
        className="px-2.5 py-2 flex flex-col  justify-center gap-3"
      >
        <p>Add new note</p>
        <input
          type="text"
          className="form-input  rounded-lg border-gray-200"
          placeholder="New title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="form-input rounded-lg border-gray-200"
          placeholder="New description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          Add new note
        </button>
      </form>
    </div>
  );
}
