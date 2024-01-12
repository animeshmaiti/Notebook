import React from "react";
import Notes from "./Notes";
import AddNote from "./AddNote";

function Home(props) {
  return (
    <div className="container w-100 mt-3 min-vh-100">
      <AddNote alert={props.alert}/>
      <Notes alert={props.alert}/>
    </div>
  );
}

export default Home;
