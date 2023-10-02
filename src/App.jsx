// import { useState } from 'react';
import { Header } from "./components/Header/Header.jsx";
import { Form } from "./components/FinanceForm/Form.jsx";
import { List } from "./components/FinanceList/List.jsx"
function App() {

  return (
    <div className="App">
      <Header/>
      <Form/>
      <List/>
    </div> 
  );
};

export default App
