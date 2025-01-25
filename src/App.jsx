import './App.css';
import { useState } from 'react';
import AddNewNote from './components/AddNewNote';
import NoteHeader from './components/NoteHeader';
import NoteList from './components/NoteList';
import NoteStatus from './components/NoteStatus';

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState('latest');
  const handleDelete = (id) => {
    const filterdNotes = notes.filter((note) => note.id !== id);
    setNotes(filterdNotes);
  };
  const handleComplete = (noteId) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, isCompleted: !note.isCompleted } : note,
      ),
    );
    console.log(notes);
  };
  return (
    <div className="md:container">
      <NoteHeader notes={notes}  setSortBy={setSortBy} />
      <NoteStatus notes={notes} />
      <div className=" flex flex-col gap-12 md:gap-5 md:grid md:grid-cols-12 md:row-span-12  mt-1 md:mt-2">
        <AddNewNote setNotes={setNotes} sortBy={sortBy} setSortBy={setSortBy} />
        <NoteList
          notes={notes}
          onDelete={handleDelete}
          onComplete={handleComplete}
          sortBy={sortBy} //Pass sortBy to NoteList
        />
      </div>
    </div>
  );
}

export default App;
