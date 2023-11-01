import { useState } from 'react';
import { useForm } from 'react-hook-form';
/* 
function ToDoList(){
    const [todo, setTodo] = useState("");
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget:{value}} = event;
        setTodo(value);
    }
    const onSubmit =(event:React.FormEvent<HTMLFormElement> )=>{
        event.preventDefault();
        console.log(todo);
    } 

    return (
    <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} value={todo} placeholder="write a todo" />
            <button>add</button>
        </form>
    </div>
    ); 
}*/

function ToDoList(){

    return (
        <div>
            <form >
                <input placeholder="write a todo" />
                <button>add</button>
            </form>
        </div>
        ); 
}

export default ToDoList;