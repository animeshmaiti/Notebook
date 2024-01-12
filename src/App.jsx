import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#212529",
    btnText: "Dark Mode",
    btn_style: "light",
    border_style: "secondary",
    svg_style: "rgba(222, 226, 230, 0.75)",
  });
  useEffect(() => {
    document.body.style.backgroundColor =
      myStyle.color === "white" ? "#212529" : "white";
    document.body.style.color = myStyle.color === "white" ? "white" : "#212529";
    document.documentElement.setAttribute(
      "data-bs-theme",
      myStyle.color === "white" ? "dark" : "light"
    );
  }, [myStyle.color]);

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle(
        //async
        {
          color: "#212529",
          backgroundColor: "white",
          btnText: "Light Mode",
          btn_style: "dark",
          svg_style: "rgba(67, 68, 68, 0.75)",
        }
      );
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#212529",
        btnText: "Dark Mode",
        nav_bg: "navbar navbar-expand-lg bg-dark",
        btn_style: "light",
        svg_style: "rgba(222, 226, 230, 0.75)",
      });
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (type, massage) => {
    setAlert({
      msg: massage,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar myTheme={myStyle} toggleStyle={toggleStyle} />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home alert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login alert={showAlert} />} />
            <Route exact path="/signup" element={<Signup alert={showAlert}/>} />
          </Routes>
          <Footer myTheme={myStyle} />
        </Router>
      </NoteState>
    </>
  );
}

export default App;
