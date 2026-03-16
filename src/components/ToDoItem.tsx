interface IToDoItemProps{
    id: string;
    label: string;
    complete: boolean;
    onComplete(): void;
    onRemove(): void;
}

export const ToDoItem = ({id, label, complete, onComplete, onRemove}: IToDoItemProps) => {
    return (
        <li key={id}> 
            {label}

            {complete ? 'Concluído' : ''}

            <button onClick = {onComplete}>
                Concluir
            </button>

            <button onClick = {onRemove}>
                Remover
            </button>
        </li>
    );
}