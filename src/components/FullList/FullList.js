import TodoList from "../TodoList/TodoList";

import './FullList.css';

const FullList = ({ data, onDelete }) => {

    const elements = data.map(item => {
        const { id, ...itemProps } = item;

        return (
            <TodoList key={id} 
                      name={itemProps.name} 
                      date={itemProps.date} 
                      increase={itemProps.increase} 
                      onDelete={() => onDelete(id)}/>
            // <TodoList {...itemProps} />
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default FullList;