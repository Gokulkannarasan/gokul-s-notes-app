

// import { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Addnote from './components/Addnote';
// import Noteslist from './components/Noteslist';

// function App() {

//   const [notes, setNotes] = useState([]);

//   // Load notes from backend when app starts
//   useEffect(() => {
//     fetch("http://localhost:5000/notes")
//       .then(res => res.json())
//       .then(data => setNotes(data))
//       .catch(err => console.error("Error loading notes:", err));
//   }, []);

//   // Add a note
//   async function addnote(text) {

//     // Send note to backend
//     const response = await fetch("http://localhost:5000/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ text }),
//     });

//     const newnote = await response.json();

//     // Update frontend UI
//     setNotes([newnote, ...notes]);
//   }

//   // Delete a note
//   async function deletenotes(id) {

//     // Delete from backend
//     await fetch(`http://localhost:5000/notes/${id}`, {
//       method: "DELETE",
//     });

//     // Update UI
//     setNotes(notes.filter(note => note.id !== id));
//   }

//   return (
//     <div>
//       <Header />
//       <Addnote addnote={addnote} />
//       <Noteslist notes={notes} deletenotes={deletenotes} />
//     </div>
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Addnote from "./components/Addnote";
import Noteslist from "./components/Noteslist";

// 👉 Import API functions from notes.js
import { fetchNotes, addNote, deleteNote } from "./notes";

function App() {
  const [notes, setNotes] = useState([]);

  // Load notes when component first loads
  useEffect(() => {
    async function loadNotes() {
      const data = await fetchNotes();   // call API
      setNotes(data);                    // update UI
    }
    loadNotes();
  }, []);

  // Add a new note
  async function handleAddNote(noteText) {
    const newNote = await addNote(noteText); // call backend
    setNotes([newNote, ...notes]);           // update UI state
  }

  // Delete a note
  async function handleDeleteNote(id) {
    await deleteNote(id);                    // delete in backend
    setNotes(notes.filter((n) => n.id !== id)); 
  }

  return (
    <div>
      <Header />
      <Addnote addnote={handleAddNote} />
      <Noteslist notes={notes} deletenotes={handleDeleteNote} />
    </div>
  );
}

export default App;
