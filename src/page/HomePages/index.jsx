import React, { useState } from 'react';
import { Header } from "../../components/Header/index.jsx";
import { TodoForm } from "../../components/TodoForm/index.jsx";
import { TodoList } from "../../components/TodoList/index.jsx";
import styles from "./style.module.scss";



export const HomePage = ({listNotes, addNote, setListNotes}) => {

    return (  
        <>
            <Header/>   
            <main className={styles.pages}>
                <TodoForm addNote={addNote} listNotes={listNotes} setListNotes={setListNotes}/>
                <TodoList listNotes={listNotes} setListNotes={setListNotes}/>
            </main>
        </>
    );
};