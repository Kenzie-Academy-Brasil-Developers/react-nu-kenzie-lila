import styles from "../TodoValue/style.module.scss";

export const TotalValue = ({listNotes}) => {

    const total = listNotes.reduce((prevValue, number) => {
        if(number.typeValue == "entrada"){
            return prevValue + Number(number.typeNumber)
        } else{
            return prevValue - Number(number.typeNumber)
        }
    }, 0);

    return (
        <div className={styles.container}>
            <h2>Valor Total: {total}</h2>
            <span>O valor se refere ao saldo</span>
        </div>
    );
};