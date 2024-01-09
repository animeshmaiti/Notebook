import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

function Home() {
  return (
    <div className="container w-100 mt-3 min-vh-100">
      <AddNote/>
      <Notes />
    </div>
  );
}

export default Home;
