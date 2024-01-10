import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getAllNotes, editNote } = context;
  const [note, setNote] = useState({
    id: "",
    updateTitle: "",
    updateDescription: "",
    updateTag: "default",
  });
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      updateTitle: currentNote.title,
      updateDescription: currentNote.description,
      updateTag: currentNote.tag,
    });
  };
  const handleUpdateNote = (e) => {
    e.preventDefault();
    editNote(note.id, note.updateTitle, note.updateDescription, note.updateTag);
    refClose.current.click();
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Open modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="header-text">
                Update note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="updateTitle" className="col-form-label">
                    Title
                  </label>
                  <input
                    value={note.updateTitle}
                    type="text"
                    className="form-control"
                    id="updateTitle"
                    name="updateTitle"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="updateDescription" className="col-form-label">
                    Description
                  </label>
                  <textarea
                    value={note.updateDescription}
                    className="form-control"
                    id="updateDescription"
                    name="updateDescription"
                    onChange={onChange}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="col-form-label">
                    Tag
                  </label>
                  <input
                    value={note.updateTag}
                    type="text"
                    className="form-control"
                    id="updateTag"
                    name="updateTag"
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleUpdateNote}>
                Update note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem note={note} key={note._id} updateNote={updateNote} />
          );
        })}
      </div>
    </>
  );
}

export default Notes;
