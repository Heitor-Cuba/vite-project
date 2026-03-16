import { useState } from "react"

import { InputAdd } from './components/InputAdd';
import { ToDoItem } from "./components/ToDoItem";
import { List } from "./components/List";

export function App() {
  const [list, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer almoço', complete: false},
    {id: '3', label: 'Fazer janta', complete: false},
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      {id: (list.length + 1).toString(),
        complete: false,
        label: value}
      ]);
  }

  const handleComplete = (id: string) => {
    setList([
      ...list.map(item => ({
        ...item,
        complete: item.id === id ? true : item.complete
      }))
    ]);
  }

  const handleRemove = (id: string) => {
    setList([
      ...list.filter(item => item.id !== id)
    ])
  }

  return (
    <div>
      <InputAdd onAdd = {handleAdd}/>

      <List>
        {list.map((listItem) => (
          <ToDoItem
            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </List>
    </div>
  )
}
