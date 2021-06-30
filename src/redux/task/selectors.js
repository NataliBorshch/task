import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.task.items;
const getFilter = state => state.task.filter;
const getById = state => state.task.taskById;

const getVisibleTask = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    return tasks.filter(task =>
      task.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getTasks,
  getFilter,
  getById,
  getVisibleTask,
};
