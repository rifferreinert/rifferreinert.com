import { v4 } from 'uuid';

export const addTask = ({ title, details, notes }) => ({
  type: 'ADD_TASK',
  task: {
    id: v4(),
    title,
    details,
    notes,
  },
});

export const editTask = (id, task) => ({
  type: 'EDIT_TASK',
  id,
  task,
});

export const finishTask = id => ({
  type: 'FINISH_TASK',
  id,
});

export const deleteTask = id => ({
  type: 'DELETE_TASK',
  id,
});
