import style from "./style.module.scss";

export const InputDescription = ({label, placeholder, span, type, value, setDescription, required}) => {
    return (
        <div className={style.box}>
            <label>{label}</label>
            <input placeholder={placeholder}
            type={type}
            value={value}
            onChange={(e) => setDescription(e.target.value)}
            required={required}
            />
            <span>{span}</span>
        </div>
    )
}