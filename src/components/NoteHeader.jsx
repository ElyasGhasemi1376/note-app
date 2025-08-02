export default function NoteHeader({ sortBy, onSortBy }) {
  return (
    <>
      <div className="col-span-10 row-span-1 flex w-full items-start justify-between px-3.5 text-xl md:px-7 md:text-2xl mb-12">
        <h2 className="flex items-center gap-0.5">
          <span>My Notes 📝</span>
        </h2>
        <select
          className="w-50 cursor-pointer rounded-xl p-1.5 text-base shadow-md outline-0 transition-all duration-200 ease-out focus:ring-2 focus:ring-blue-700"
          value={sortBy}
          onChange={onSortBy}
        >
          <option value="latest">latest notes</option>
          <option value="earliest">earliest notes</option>
          <option value="completed">completed notes</option>
        </select>
      </div>
     
    </>
  );
}
