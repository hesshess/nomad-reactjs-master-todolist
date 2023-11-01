import { atom } from 'recoil';

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
});
