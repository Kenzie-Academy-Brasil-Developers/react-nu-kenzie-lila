import React, { useState } from 'react';
import { Header } from "../../components/Header/index.jsx";
import { TodoForm } from "../../components/TodoForm/index.jsx";
import { TodoList } from "../../components/TodoList/index.jsx";



export const HomePage = () => {

    const [todoList, setTodoList] = useState([]);
    return (     
        <main>
            <Header/>
            <TodoForm setTodoList={setTodoList} todoList={todoList}/>
            <TodoList todoList={todoList}/>
        </main>
    );
};