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
    const result = await response.json();
    setNotes(notes.concat(result));
  };
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTZmOTBjN2IzOTkwZTgwNmVlZmExIn0sImlhdCI6MTcwNDM3NTkzMH0.eWfsTFPd5xQD02a3SBTRcUh1mUwBPs5cFimCkfgQNWs",
      },
    });
    const result = await response.json();
    console.log(result);
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
    const result = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    console.log(result);
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
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
