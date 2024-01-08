import React from "react";
import Notes from "./Notes";

function Home() {
  return (
    <div className="container w-100 mt-3 min-vh-100">
      <h2>Add Notes</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" id="title" />
          <div className="form-text">give a title</div>
        </div>
        <div className="mb-3">
          <label htmlFor="floatingTextarea" className="form-label">
            Description
          </label>
          <textarea
            rows="5"
            className="form-control"
            placeholder="Write a description"
            id="floatingTextarea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Notes />
    </div>
  );
}

export default Home;
