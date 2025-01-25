export default function NoteHeader({ notes, setSortBy }) {
  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="flex items-center justify-center gap-2">Note header  <span className="bg-blue-500 text-xs text-white size-3 flex justify-center items-center p-2.5 rounded-full">
            {notes.length}
          </span></h1>
        </div>
        <div>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            name={notes.id}
            id={notes.id}
            className="rounded-lg"
          >
            <option value="latest">sort based on latest notes</option>
            <option value="earliest">sort based on earliest notes</option>
            <option value="completed">sort based on completed notes</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
}
