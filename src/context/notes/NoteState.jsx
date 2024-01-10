import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);
  const host = "http://localhost:5000";
  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTZmOTBjN2IzOTkwZTgwNmVlZmExIn0sImlhdCI6MTcwNDM3NTkzMH0.eWfsTFPd5xQD02a3SBTRcUh1mUwBPs5cFimCkfgQNWs",
      },
    });
    const allNotes = await response.json();
    setNotes(allNotes);
  };
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTZmOTBjN2IzOTkwZTgwNmVlZmExIn0sImlhdCI6MTcwNDM3NTkzMH0.eWfsTFPd5xQD02a3SBTRcUh1mUwBPs5cFimCkfgQNWs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = response.json();
    const note = {
      _id: "659799073ed6e9a5de55cb4d",
      user: "65956f90c7b3990e806eefa1",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-05T05:52:07.065Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTZmOTBjN2IzOTkwZTgwNmVlZmExIn0sImlhdCI6MTcwNDM3NTkzMH0.eWfsTFPd5xQD02a3SBTRcUh1mUwBPs5cFimCkfgQNWs",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const result = response.json();
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
