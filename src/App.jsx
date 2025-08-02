import "./css/App.css";
import Notes from "./components/Notes";
import NoteHeader from "./components/NoteHeader";
import NoteStatus from "./components/NoteStatus";
import AddNewNote from "./components/AddNewNote";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("NOTES")) || [],
  );
  const [sortBy, setSortBy] = useState("latest");

  function handleAddNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }
  function deleteNote(noteId) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
  }
  function handleToggleNoteStatus(noteId) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note,
      ),
    );
  }
  useEffect(() => {
    localStorage.setItem("NOTES", JSON.stringify(notes));
  }, [notes]);

  return (
    <main className="grid h-5/6 w-full grid-cols-10 grid-rows-10 space-y-3 gap-x-3.5 md:space-y-3.5 md:space-x-0">
      <NoteHeader sortBy={sortBy} onSortBy={(e) => setSortBy(e.target.value)} />
      <NoteStatus notes={notes} />
      <AddNewNote onAddNote={handleAddNote} />
      <Notes
        notes={notes}
        sortBy={sortBy}
        onDeleteNote={deleteNote}
        onToggleNoteStatus={handleToggleNoteStatus}
      />
    </main>
  );
}

export default App;
