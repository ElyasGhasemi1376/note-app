export default function NoteStatus({ notes }) {
  // ! Derived states
  
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.isCompleted).length;
  const unCompletedNotes = allNotes - completedNotes;
  return (
    <div className="mt-3 mb-5">
      <ul className="flex justify-between px-2.5 md:px-0 md:pl-36 md:justify-center md:gap-9">
        <li className="flex justify-center items-center gap-1.5">
          <span>All</span>
          <span className="bg-black text-xs text-white size-3 flex justify-center items-center p-2.5 rounded-full">
            {allNotes}
          </span>
        </li>
        <li className="flex justify-center items-center gap-1.5">
          <span>Completed</span>
          <span className="bg-black text-xs text-white size-3 flex justify-center items-center p-2.5 rounded-full">
            {completedNotes}
          </span>
        </li>
        <li className="flex justify-center items-center gap-1.5">
          <span>Open</span>
          <span className="bg-black text-xs text-white size-3 flex justify-center items-center p-2.5 rounded-full">
            {unCompletedNotes}
          </span>
        </li>
      </ul>
    </div>
  );
}
