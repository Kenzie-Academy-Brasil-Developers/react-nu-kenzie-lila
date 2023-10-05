import React, { useState } from 'react';
import { Header } from "../../components/Header/index.jsx";
import { TodoForm } from "../../components/TodoForm/index.jsx";
import { TodoList } from "../../components/TodoList/index.jsx";



export const HomePage = ({listNotes, addNote, setListNotes}) => {

    return (  
        <>
            <Header/>   
            <main>
                <TodoForm addNote={addNote} listNotes={listNotes}/>
                <TodoList listNotes={listNotes} setListNotes={setListNotes}/>
            </main>
        </>
    );
};