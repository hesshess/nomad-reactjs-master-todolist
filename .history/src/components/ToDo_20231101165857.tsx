import { IToDo } from './atoms';

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span>
      <button>TODO</button>
      <button>DOING</button>
      <button>DONE</button>
    </li>
  );
}

export default ToDo;
