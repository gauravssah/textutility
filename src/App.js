import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");

  const handalMode = () => {
    console.log("clic on mide btn")
  }

  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("dark");
      setMode("light");
      document.body.style.backgroundColor = "white";
    }

  }

  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />

      <div className="container my-4">
        <TextForm heading="Enter the text to analyze below" mode={mode} />


        {/* <About /> */}
      </div>


    </>
  );
}

export default App;
