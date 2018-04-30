export const getCurrentTask = tasks => (
  tasks.find(task => !task.get('complete'))
);

export const unfinishedTasks = tasks => (
  typeof getCurrentTask(tasks) != 'undefined'
);

export const getTask = (tasks, id) => (
  tasks.find(task => task.get('id') === id)
);
