import { createAction } from '@reduxjs/toolkit';

const getTaskRequest = createAction('task/getTaskRequest');
const getTaskSuccess = createAction('task/getTaskSuccess');
const getTaskError = createAction('task/getTaskError');

const createTaskRequest = createAction('task/createTaskRequest');
const createTaskSuccess = createAction('task/createTaskSuccess');
const createTaskError = createAction('task/createTaskError');

const updateTaskRequest = createAction('task/updateTaskRequest');
const updateTaskSuccess = createAction('task/updateTaskSuccess');
const updateTaskError = createAction('task/updateTaskError');

const removeTaskRequest = createAction('task/removeTaskRequest');
const removeTaskSuccess = createAction('task/removeTaskSuccess');
const removeTaskError = createAction('task/removeTaskError');

const rejectionTaskRequest = createAction('task/rejectionTaskRequest');
const rejectionTaskSuccess = createAction('task/rejectionTaskSuccess');
const rejectionTaskError = createAction('task/rejectionTaskError');

const filterTask = createAction('task/Filter');

const SortTaskUp = createAction('tasks/sortTaskUp');
const SortTaskDown = createAction('task/SortTaskDown');

export default {
  getTaskRequest,
  getTaskSuccess,
  getTaskError,

  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError,

  createTaskSuccess,
  createTaskRequest,
  createTaskError,

  updateTaskRequest,
  updateTaskSuccess,
  updateTaskError,

  rejectionTaskRequest,
  rejectionTaskSuccess,
  rejectionTaskError,

  filterTask,

  SortTaskUp,
  SortTaskDown,
};
