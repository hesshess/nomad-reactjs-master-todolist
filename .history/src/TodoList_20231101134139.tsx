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

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('todo', {
            required: 'todo is required',
            minLength: {
              value: 5,
              message: 'your todo is too short',
            },
          })}
          placeholder="write a todo"
        />
        <span>{errors?.todo?.message}</span>
        <button>add</button>
      </form>
    </div>
  );
}

export default ToDoList;
