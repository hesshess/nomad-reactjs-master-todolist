import { useForm } from 'react-hook-form';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
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
interface IForm {
  todo: string;
}

interface IToDo {
  text: string;
  category: 'TODO' | 'DOING' | 'DONE';
}

const toDoState = atom<IToDo[]>({
  key: 'todo',
  default: [],
});

function ToDoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const value = useRecoilValue(toDoState);
  // const modfn = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ todo }: IForm) => {
    setToDos((prevTodos) => [{ text: todo, category: 'TODO' }, ...prevTodos]);
    setValue('todo', '');
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
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
        <button>add</button>
      </form>
      <ul></ul>
    </div>
  );
}

export default ToDoList;
