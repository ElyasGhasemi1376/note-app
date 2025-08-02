import { useState } from "react";
export default function AddNewNote({
 onAddNote
}) {
   const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
     function handleSubmit(e) {
    e.preventDefault();
    if (!newTitle || !newDescription) return;

    const newNote = {
      id: Date.now(), // time stamp
      title: newTitle,
      description: newDescription,
      createdAt: new Date().toISOString(),
      isCompleted: false,
    };

    onAddNote(newNote);
    setNewTitle("");
    setNewDescription("");
  }
  return (
    <div className="col-span-10 row-span-3 mb-0 h-fit max-h-52 w-full md:col-span-3">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-3 rounded-xl border border-slate-200 px-2 py-1.5 shadow-md"
      >
        <p> Add new note</p>
        <div className="w-full">
          <input
            className="ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
            placeholder="New title ..."
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </div>
        <div className="w-full">
          <input
            className="ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
            placeholder="New description ..."
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg !bg-blue-700 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 ease-out hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        >
          <span className="font-bold">+ </span>
          <span> Add new note</span>
        </button>
      </form>
    </div>
  );
}
