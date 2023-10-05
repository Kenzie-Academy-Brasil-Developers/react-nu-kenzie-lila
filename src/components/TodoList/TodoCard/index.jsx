export const TodoCard = ({element, listNotes, setListNotes}) => {
    const deletTodo = (elementId) => {
        setListNotes((listNotes) => listNotes.filter((todo) => todo.id != elementId))
    }
    console.log(element)
    return (
        <>
            <li>
                <h3>{element.description}</h3>
                <p>{element.typeNumber}</p>
                <p>{element.typeValue}</p>
                <button className="btnDelete" onClick={
                    () => deletTodo(element.id)
                }>Excluir</button>
            </li>
        </>
    )
}




