import { TodoCard } from "./TodoCard";
import styles from "./style.module.scss";

export const TodoList = ({listNotes, setListNotes}) => {


    return (
        <div>
            <h2 className={styles.description}>Resumo financeiro</h2>
            <ul className={styles.boxCard2}>
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

