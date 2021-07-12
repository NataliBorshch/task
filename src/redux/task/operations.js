import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:5050';

const getTask = () => dispatch => {
  dispatch(actions.getTaskRequest());
  axios
    .get('/task')
    .then(({ data }) => {
      console.log(data);
      return dispatch(actions.getTaskSuccess(data));
    })
    .catch(error => dispatch(actions.getTaskError(error.message)));
};

const addTask = obj => dispatch => {
  dispatch(actions.createTaskRequest());
  axios
    .post('/task', obj)
    .then(({ data }) => {
      return dispatch(actions.createTaskSuccess(data));
    })
    .catch(error => dispatch(actions.createTaskError(error.message)));
};

const removeTask = id => dispatch => {
  dispatch(actions.removeTaskRequest());
  axios
    .delete(`/task/${id}`)
    .then(() => {
      return dispatch(actions.removeTaskSuccess(id));
    })
    .catch(error => dispatch(actions.removeTaskError(error.message)));
};

const updateTask = (id, data) => dispatch => {
  dispatch(actions.updateTaskRequest());
  axios
    .put(`/task/${id}`, data)
    .then(({ data }) => {
      return dispatch(actions.updateTaskSuccess(data));
    })
    .catch(error => dispatch(actions.updateTaskError(error.message)));
};

const rejectionTask = id => dispatch => {
  dispatch(actions.removeTaskRequest());
  axios
    .patch(`/task/${id}`)
    .then(({ data }) => {
      return dispatch(actions.rejectionTaskSuccess(data));
    })
    .catch(error => actions.rejectionTaskError(error.message));
};

export default {
  getTask,
  addTask,
  updateTask,
  removeTask,
  rejectionTask,
};
