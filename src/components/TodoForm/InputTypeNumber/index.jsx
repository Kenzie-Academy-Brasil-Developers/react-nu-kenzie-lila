import style from "./style.module.scss";

export const InputTypeNumber = ({label, type, placeholder, value, setTypeNumber, required}) => {
    return (
        <div className={style.box}>
            <label>{label}</label>
            <input placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => setTypeNumber(e.target.value)}
            required={required}
            />
        </div>    
    )
}