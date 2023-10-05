import { TodoCard } from "./TodoCard";

export const TodoList = ({listNotes, setListNotes}) => {
    

    return (
        <div>
            <h2 className="title two">Resumo financeiro</h2>
            <ul>
                {listNotes.map((element) => (
                <TodoCard
                key={element.id}
                element={element}
                setListNotes={setListNotes}
                listNotes={listNotes}
                />
                ))}
            </ul>
        </div>
    );
};

