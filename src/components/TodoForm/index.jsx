import { useState } from "react";
import { v4 as uuidv4} from "uuid";

export const TodoForm = ({todoList,setTodoList}) => {
    const [description, setDescription] = useState("");
    const [typeNumber, setTypeNumber] = useState("");
    const [typeValue, setTypeValue] = useState("");
    
    const addTodo = () => {
        const newTodo = {id:uuidv4(), description, typeNumber, typeValue};
        
        setTodoList((todoList) => [...todoList, newTodo]);
    }
    
    const submit = (e) => {
        e.preventDefault();
        addTodo();
        setDescription("");
        setTypeNumber("");
        setTypeValue("");
    };


    return(
        <div>
            <form onSubmit={submit} className="containerForm">
 
                <label className="placehober">Descrição</label>
                <input className="headline" type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <p className="body">Ex: Compra de roupas</p>
                
                
                <label>Valor R$</label>
                <input type="number" placeholder="1" value={typeNumber} onChange={(e) => setTypeNumber(e.target.value)}/>

                
                <label>Tipo de valor</label>
                <select placeholder="Entrada" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}/>
            

                <button className="btnInsert" type="submit">Inserir valor</button>
            </form>
        </div>
    );
};