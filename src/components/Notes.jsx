import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes } = context;
  useEffect(() => {
    getAllNotes();
  }, [])
  
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem note={note} key={note._id} />;
      })}
    </div>
  );
}

export default Notes;
