export const TodoCard = ({element}) => {

    return (
        <>
            <li>
                <h3>{element.description}</h3>
                <p>{element.typeNumber}</p>
                <p>{element.typeValue}</p>
                <button className="btnDelete">Excluir</button>
            </li>
        </>
    )
}




