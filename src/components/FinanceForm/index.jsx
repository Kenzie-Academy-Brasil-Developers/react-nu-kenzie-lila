import { useState } from "react";
import { Input } from "../Imput/index.jsx";

export const FinanceForm = () => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [typeValue, setTypeValue] = useState("");

    console.log(description);
    console.log(value);
    console.log(typeValue);
    
    const submit = (e) => {
        e.preventDefault();
        console.log({description, value, typeValue});

        setDescription("");
        setValue("");
        setTypeValue("");
    };

    return(
        <div>

            <form onSubmit={submit} className="containerForm">
                
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <p>Ex: Compra de roupas</p>
                

                
                <label>Valor R$</label>
                <input type="text" placeholder="1" value={value} onChange={(e) => setValue(e.target.value)}/>
                

                
                <label>Tipo de valor</label>
                <input type="text" placeholder="Entrada" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}/>
            

                <button className="btn" type="submit">Inserir valor</button>
            </form>
        </div>
    );
};