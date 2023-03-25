import { BiMessageSquareAdd } from 'react-icons/bi';

const Form = ({setInputText , inputText , todos , settodos , setTab}) => {

    const inputTextHandler = (haha) => {
        setInputText(haha.target.value)

    }

    const submitTodo = (hehe) => {
        hehe.preventDefault()

        settodos([
            ...todos,
            {
                text:inputText,
                completed:false,
                id: Math.random() * 999
            }
        ])
    
        setInputText('')
    }

    const handleSelete = (hoho) => {
        setTab(hoho.target.value)
    }
    
    return(
        <form>
            <input 
            type="text" 
            className = 'todo-input'
            value={inputText}
            onChange={inputTextHandler}
            />

            <button
            type="submit"
            className="todo-button"
            onClick={submitTodo}
            >
             < BiMessageSquareAdd/>
            </button>

            <div className="select">
                
                <select name="todos" onChange={handleSelete}>
                    <option value="all">全部</option>
                    <option value="completed">已完成</option>
                    <option value="uncompleted">待完成</option>
                </select>
            </div>
        </form>

        
    )
}

export default Form