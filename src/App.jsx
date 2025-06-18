import "./App.css";
import Todo from "./components/Todo.jsx";
import TodoTitle from "./components/TodoTitle.jsx";
import Popup from "./components/Popup.jsx";
import Counter from "./components/Counter.jsx";
import { useState, useEffect } from "react";

function App() {
  
  return (
    <>

      <TodoTitle />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />

        <button onClick={() => setPopupOpen(true)}>Add to do</button>
      </div>
      <Todo togglePopup={togglePopup} task="Learn React" />
      <Todo togglePopup={togglePopup} task="Finish ASAP frontend" />
      <Todo togglePopup={togglePopup} task="Land a junior job" />
      <Todo togglePopup={togglePopup} task="Earn 200k+" />
      {popupOpen && <Popup detogglePopup={detogglePopup} Title="Are you sure 100%" />}
    </>
  );
}

export default App;
