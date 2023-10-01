import { useState } from "react";


export const Form = () => {
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const [typeValue, setTypeValue] = useState("");

    const submit = (e) => {
        e.preventDefault();
        // console.log({description, value, typeValue});
        setDescription("");
        setValue("");
        setTypeValue("");

    }



    return(
        <form onSubmit={submit}>
            <div>
                <label>Descrição</label>
                <input type="text" placeholder="Digite aqui sua descrição" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <div>
                <label>Valor R$</label>
                <input type="text" placeholder="1" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>

            <div>
                <label>Tipo de valor</label>
                <input type="text" placeholder="Entrada" value={typeValue} onChange={(e) => setTypeValue(e.target.value)}/>
            </div>

            <button type="submit">Inserir valor</button>
        </form>
    );
};