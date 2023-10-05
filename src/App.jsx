import { HomePage } from "./page/HomePages/index.jsx";
import "./styles/index.scss";
import { useState } from "react";
import { v4 as uuidv4} from "uuid";


function App() {
  const[listNotes, setListNotes] = useState([])

  const addNote = (description, typeNumber, typeValue) => {
    const id = uuidv4();
    console.log(id)
    const newNote = {description, typeNumber, typeValue, id};

    setListNotes([...listNotes, newNote]);
  }

  return (
    <div className="App">
      <HomePage listNotes={listNotes} addNote= {addNote} setListNotes={setListNotes}/>
    </div> 
  );
};

export default App


