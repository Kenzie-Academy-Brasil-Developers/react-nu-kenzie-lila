import styles from "./style.module.scss";

export const TodoCard = ({element, listNotes, setListNotes}) => {
    const deletTodo = (elementId) => {
        setListNotes((listNotes) => listNotes.filter((todo) => todo.id != elementId))
    }
    console.log(element)
    return (
        <>
            <li className={styles.container}>
                <div className={styles.box1}>
                    <h3 className={styles.description}>{element.description}</h3>
                    <p className={styles.valueNumber}>{element.typeValue}</p>
                </div>
                <div className={styles.box2}>
                    <p className={styles.typeNumber}>R${element.typeNumber}</p>
                    <button className={styles.bntDelete} onClick={
                        () => deletTodo(element.id)
                    }>Excluir</button>
                </div>
            </li>
        </>
    )
}




