import { MdCheck, MdDeleteOutline } from 'react-icons/md';




const Todo = ({todos , settodos , text , todo}) => {

    const completeTodo = () => {

        settodos(todos.map(item => {
    
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                }
            }
            return item
        }))
        
    } 

    const deleteTodo = () => {

        settodos(todos.filter(el => el.id !== todo.id))
    }



    return(
        <div className="todo">
            <li className= {`todo-item ${todo.completed ? 'completed' : ''}`}>
                {text}

            </li>

            <button className="complete-btn" onClick={completeTodo}>
                <MdCheck />
            </button>
            <button className="trush-btn" onClick={deleteTodo}>
                <MdDeleteOutline />
            </button>

        </div>
    )
}

const Todolist = ({ todos , settodos}) => {

    return(
        <div className="todo-container">
            <div className="todo-list">
                {todos?.map(todo => (
                        <Todo 
                        key={todo.id}
                        todos={todos}
                        settodos={settodos}
                        text={todo.text}
                        todo={todo}
                    />
                ))}

            </div>
        </div>
    )
}

export default Todolist