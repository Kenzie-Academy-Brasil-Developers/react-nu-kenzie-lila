import style from "./style.module.scss";

export const SelectTypeValue = ({label, value, setTypeValue, option}) => {
    return (
        <div className={style.box}>
            <label>{label}</label>
            <select value={value} onChange={(e) => setTypeValue(e.target.value)} >
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option> 
            </select>      
        </div>
    )
}

