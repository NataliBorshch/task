import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.task.items;
const getFilter = state => state.task.filter;

const isLoading  =state=>  state.task.isLoaging;

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

  getVisibleTask,
  isLoading
};
