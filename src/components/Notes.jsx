import { TrashIcon } from "@heroicons/react/16/solid";
import Message from "./Message";
export default function Notes({ notes, onDeleteNote,onToggleNoteStatus, sortBy }) {
   let sortedNotes = notes;
  if (sortBy === "latest") sortedNotes = [...notes].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
  if (sortBy === "earliest") sortedNotes = [...notes].sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
  if (sortBy === "completed") sortedNotes = [...notes].sort((a,b)=>Number(a.isCompleted)-Number(b.isCompleted));
  return (
    <div className="col-span-10 row-span-6 mt-12 h-2/3 max-h-96 w-full overflow-y-auto md:col-span-7 md:mt-0">
      {notes.length !== 0 ? (
        <ul className="mr-3 space-y-4">
          {sortedNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onToggleNoteStatus={onToggleNoteStatus}
              onDeleteNote={onDeleteNote}
            />
          ))}
        </ul>
      ) : (
        <Message>
          <span>ℹ️</span>
          <span>please add a new note</span>
        </Message>
      )}
    </div>
  );
}

function NoteItem({ note, onToggleNoteStatus, onDeleteNote }) {
  const opt = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const date = new Date(note.createdAt).toLocaleDateString("en-US", opt);

  return (
    <li className="flex cursor-pointer justify-between overflow-hidden rounded-lg border border-zinc-200 bg-white px-2.5 py-2.5 shadow-md transition-all duration-200 ease-out hover:border-2 hover:border-blue-700">
      <div className="flex flex-col items-start justify-center ">
        <h2
          className={`${note.isCompleted ? "line-through" : ""} text-base font-bold md:text-lg xl:text-xl`}
        >
          {note.title}
        </h2>
        <p
          className={`${note.isCompleted ? "line-through blur-xs" : ""} text-sm font-semibold text-slate-400 md:text-base xl:text-lg`}
        >
          {note.description}
        </p>
        <p className="mt-2 text-xs text-slate-300 md:text-sm xl:text-base">
          {date}
        </p>
      </div>

      <div className="flex items-end justify-end gap-1.5 pr-1.5">
        <TrashIcon
          className="size-4 cursor-pointer text-blue-600 hover:text-blue-800 active:text-blue-900"
          onClick={() => onDeleteNote(note.id)}
        />
        <div className="flex items-center">
          <input
            className="size-4 rounded-sm border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
            type="checkbox"
            checked={note.isCompleted}
            onChange={() => onToggleNoteStatus(note.id)}
          />
        </div>
      </div>
    </li>
  );
}
