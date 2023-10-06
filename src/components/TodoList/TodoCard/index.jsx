import styles from "./style.module.scss";

export const TodoCard = ({element, listNotes, setListNotes}) => {
    const deletTodo = (elementId) => {
        setListNotes((listNotes) => listNotes.filter((todo) => todo.id != elementId))
    }
    console.log(element)
    return (
        <>
            <li className={styles.container}>
                <h3 className={styles.description}>{element.description}</h3>
                <p className={styles.typeNumber}>{element.typeNumber}</p>
                <p className={styles.valueNumber}>{element.typeValue}</p>
                <button className="btnDelete" onClick={
                    () => deletTodo(element.id)
                }>Excluir</button>
            </li>
            {/* <span>{span}</span> */}
        </>
    )
}




