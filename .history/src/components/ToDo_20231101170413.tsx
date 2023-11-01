import { IToDo } from './atoms';

function ToDo({ text, category }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      {category !== 'TODO' && <button>TODO</button>}
      {category !== 'DOING' && <button>DOING</button>}
      {category !== 'DONE' && <button>DONE</button>}
    </li>
  );
}

export default ToDo;
