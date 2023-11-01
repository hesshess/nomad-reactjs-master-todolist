import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from './atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setToDos((prevTodos) => [
      { text: toDo, id: Date.now(), category: 'TODO' },
      ...prevTodos,
    ]);
    setValue('toDo', '');
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('toDo', {
          required: 'todo is required',
        })}
        placeholder="write a todo"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
