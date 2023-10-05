import style from "./style.module.scss";

export const SelectTypeValue = ({label, value, setTypeValue, option}) => {
    return (
        <div className={style.box}>
            <label>{label}</label>
            <select value={value} onChange={(e) => setTypeValue(e.target.value)} >
                <option value="entrada">entrada</option>
                <option value="saida">saida</option> 
            </select>      
        </div>
    )
}

