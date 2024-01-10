import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  const handleAddNote = (e) => {
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({title: "", description: "", tag: ""});
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Add Notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            value={note.title}
          />
          <div className="form-text">give a title</div>
        </div>
        <div className="mb-3">
          <label htmlFor="floatingTextarea" className="form-label">
            Description
          </label>
          <textarea
            onChange={onChange}
            name="description"
            rows="5"
            className="form-control"
            placeholder="Write a description"
            id="description"
            value={note.description}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
          />
          <div className="form-text">Add a tag optional</div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleAddNote}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
