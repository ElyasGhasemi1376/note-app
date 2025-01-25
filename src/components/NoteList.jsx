export default function NoteList({ notes, onDelete, onComplete, sortBy }) {
  const sortedNotes = [...notes].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);

    if (sortBy === 'latest') {
      return dateB - dateA; // Newest first
    } else if (sortBy === 'earliest') {
      return dateA - dateB; // Oldest first
    } else if (sortBy === 'completed') {
      // Completed notes come first
      if (a.isCompleted === b.isCompleted) {
        return 0; // If both are completed or both are incomplete, maintain their order
      } else if (a.isCompleted) {
        return -1; // a is completed, so it comes before b
      } else {
        return 1; // b is completed, so it comes before a
      }
    }
    return 0; // Default: no sorting
  });
  return (
    <div className="  md:col-span-8 md:row-span-8 flex flex-col gap-y-5 max-h-96 overflow-y-auto pb-9">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} onComplete={onComplete} />
      ))}
    </div>
  );
}
function NoteItem({ note, onDelete, onComplete }) {
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  console.log('Note Item:', note); // Debugging

  return (
    <div className="rounded-xl bg-white border border-gray-100 shadow-lg px-2.5 py-3 md:px-3.5 md:py-4 flex flex-col items-start justify-center">
      <div className={`font-semibold text-base md:text-lg ${note.isCompleted?`opacity-70 line-through`:``}`}>
        <h2>{note.title}</h2>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="text-sm md:text-base">{note.description}</p>
        <div className=" flex justify-between items-center gap-1.5 ">
          <div
            onClick={() => onDelete(note.id)}
            className="flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          <div className="flex justify-center items-center">
            <input
              className="form-checkbox rounded-md border-gray-300 text-green-500 focus:ring-green-400"
              type="checkbox"
              name={note.id}
              id={note.id}
              onChange={() => onComplete(note.id)}
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="w-full flex justify-start text-slate-400 text-xs md:text-sm">
        {new Date(note.createdAt).toLocaleDateString('en-US', options)}
      </div>
    </div>
  );
}
