import styles from "../TodoValue/style.module.scss";

export const TotalValue = ({listNotes}) => {

    const totalChar = listNotes.reduce((prevValue, number) => {
        const numberDecimal = parseFloat(number.typeNumber.replace(",", "."));
        if(number.typeValue == "entrada"){
            // return prevValue + parseFloat(number.typeNumber);
            return prevValue + numberDecimal;
        } else{
            // return prevValue - parseFloat(number.typeNumber);
            return prevValue - numberDecimal;
        }
    }, 0);

    const totalFormatted = totalChar.toFixed(2);

    return (
        <div className={styles.container}>
            <h2>Valor Total: {totalFormatted}</h2>
            <span>O valor se refere ao saldo</span>
        </div>
    );
};
