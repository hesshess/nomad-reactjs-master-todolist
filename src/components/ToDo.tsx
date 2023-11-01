import { useSetRecoilState } from 'recoil';
import { IToDo, toDoState } from './atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((todo) => todo.id === id);
      const newToDo: IToDo = { text, id, category: name as IToDo['category'] };
      return [
        ...prevToDos.slice(0, targetIndex),
        newToDo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== 'TODO' && (
        <button onClick={onClick} name="TODO">
          TODO
        </button>
      )}
      {category !== 'DOING' && (
        <button onClick={onClick} name="DOING">
          DOING
        </button>
      )}
      {category !== 'DONE' && (
        <button onClick={onClick} name="DONE">
          DONE
        </button>
      )}
    </li>
  );
}

export default ToDo;
