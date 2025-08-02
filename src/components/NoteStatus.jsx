export default function NoteStatus({ notes }) {
  if (notes.length === 0) return null;
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const openNotes = allNotes - completedNotes;
  return (
    <div className="col-span-10 row-span-1 my-2.5">
      <ul className="flex w-full items-center justify-between text-xs md:ml-20 md:justify-center md:space-x-8 md:text-base">
        <li className="flex items-center space-x-1.5 md:space-x-2.5">
          <span>All</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            {allNotes}
          </span>
        </li>
        <li className="flex items-center space-x-1.5 md:space-x-2.5">
          <span>Completed</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            {/* {notes.filter((note) => note.completed).length} */}
            {completedNotes}
          </span>
        </li>
        <li className="flex items-center space-x-1.5 md:space-x-2.5">
          <span>Open</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white">
            {/* {notes.filter((note) => !note.completed).length} */}
            {openNotes}
          </span>
        </li>
      </ul>
    </div>
  );
}