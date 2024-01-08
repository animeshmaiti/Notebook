import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      _id: "65978f117532f26f0c4de557",
      user: "65956f90c7b3990e806eefa1",
      title: "my new note",
      description: "my new description",
      tag: "new personal",
      date: "2024-01-05T05:09:37.319Z",
      __v: 0,
    },
    {
      _id: "659794409c9f2ca989b2359e",
      user: "65956f90c7b3990e806eefa1",
      title: "wake up early",
      description: "good for health",
      tag: "personal",
      date: "2024-01-05T05:31:44.956Z",
      __v: 0,
    },
    {
      _id: "6597945a9c9f2ca989b235a0",
      user: "65956f90c7b3990e806eefa1",
      title: "dont waste time",
      description: "time is valuable",
      tag: "personal",
      date: "2024-01-05T05:32:10.598Z",
      __v: 0,
    },
    {
      _id: "659799073ed6e9a5de55cb4d",
      user: "65956f90c7b3990e806eefa1",
      title: "concurrently",
      description: "concurrently react and nodemon is running",
      tag: "react",
      date: "2024-01-05T05:52:07.065Z",
      __v: 0,
    },
    {
      _id: "659799073ed6e9a5de55cb4d",
      user: "65956f90c7b3990e806eefa1",
      title: "concurrently",
      description: "concurrently react and nodemon is running",
      tag: "react",
      date: "2024-01-05T05:52:07.065Z",
      __v: 0,
    },
    {
      _id: "659799073ed6e9a5de55cb4d",
      user: "65956f90c7b3990e806eefa1",
      title: "concurrently",
      description: "concurrently react and nodemon is running",
      tag: "react",
      date: "2024-01-05T05:52:07.065Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNotes);
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
