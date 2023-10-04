import { TodoCard } from "./TodoCard"

export const TodoList = ({todoList}) => {

    return (
        <div>
            <h2 className="title two">Resumo financeiro</h2>
            <ul>
                {todoList.map((element) => <TodoCard  key={element.id} element={element}/>)} 
            </ul>
        </div>
    )
}

