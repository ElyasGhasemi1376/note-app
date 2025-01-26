export default function NoteHeader({ notes, setSortBy }) {
  return (
    <div>
      <div className="w-full flex justify-between items-center gap-6">
        <div>
          <h1 className="whitespace-nowrap flex items-center justify-center gap-2 md:gap-0">
            Notes
          </h1>
        </div>
        <div>
          <select
            onChange={(e) => setSortBy(e.target.value)}
            name={notes.id}
            id={notes.id}
            className="rounded-lg text-sm  px-2 py-1 md:text-base md:px-3 md:py-2"
          >
            <option value="latest"> latest notes</option>
            <option value="earliest"> earliest notes</option>
            <option value="completed"> completed notes</option>
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
}
