import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

function CreateToDo() {
  const setToDos = useSetRecoilState();
  const { register, handleSubmit, setValue } = useForm();
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
