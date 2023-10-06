import { useState } from "react";
import { v4 as uuidv4} from "uuid";
import styles from "./style.module.scss";
import { InputDescription } from "./InputDescrition";
import { InputTypeNumber } from "./InputTypeNumber";
import { SelectTypeValue } from "./SelectTypeValue/input";
import { TotalValue } from "./TodoValue";

export const TodoForm = ({addNote, setListNotes, listNotes}) => {
    const [description, setDescription] = useState("");
    const [typeNumber, setTypeNumber] = useState("");
    const [typeValue, setTypeValue] = useState("entrada");
    
    const addTodo = () => {
        const newTodo = {id:uuidv4(), description, typeNumber, typeValue};
        
        setListNotes((listNotes) => [...listNotes, newTodo]);
    }
    
    const submit = (e) => {
        e.preventDefault();
        addNote(description, typeNumber, typeValue);
        setDescription("");
        setTypeNumber("");
        setTypeValue("entrada");
    };

    return(
        <div>
            <form onSubmit={submit} className={styles.containerForm}>
      
                <InputDescription type="text" placeholder="Digite aqui sua descrição" value={description} label="Descrição" span="Ex: Compra de roupas" setDescription={setDescription} required={true}/>

                <InputTypeNumber type="number" label="Valor(R$)" placeholder="0" value={typeNumber}  setTypeNumber={setTypeNumber} required={true}/>

                <SelectTypeValue label="Tipo de valor" value={typeValue} setTypeValue={setTypeValue}
                option/>

                <button className="btnInsert" type="submit">Inserir valor</button>
            </form>
            <TotalValue listNotes={listNotes}/>
        </div>
    );
};