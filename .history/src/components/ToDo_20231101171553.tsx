import { IToDo } from './atoms';

function ToDo({ text, category, id }: IToDo) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
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
