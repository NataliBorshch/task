import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.task.items;
const getFilter = state => state.task.filter;
const getTasksCount = state => state.task.items.length;

const isLoading = state => state.task.isLoading;

const getVisibleTask = createSelector(
  [getTasks, getFilter],
  (tasks, filter) => {
    return tasks.filter(task =>
      task.status.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export default {
  getTasks,
  getFilter,
  getVisibleTask,
  isLoading,
  getTasksCount,
};
