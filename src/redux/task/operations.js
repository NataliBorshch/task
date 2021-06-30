import axios from 'axios';
import actions from './actions';

axios.defaults.baseURL = 'http://localhost:5050';

const getTask = () => dispatch => {
  dispatch(actions.getTaskRequest());
  axios
    .get('/task')
    .then(({ data }) => {
      return dispatch(actions.getTaskSuccess(data));
    })
    .catch(error => dispatch(actions.getTaskError(error.message)));
};

const removeTask = (id ) => dispatch => {
  dispatch(actions.getTaskRequest());
  axios
    .delete(`/task${id}`)
    .then(() => {
      return dispatch(actions.getTaskSuccess());
    })
    .catch(error => dispatch(actions.getTaskError(error.message)));
};




const updateTask = (obj) => dispatch => {
    dispatch(actions.updateTaskRequest());
    axios
      .post('/task')
      .then(({ data }) => {
        return dispatch(actions.updateTaskSuccess(data));
      })
      .catch(error => dispatch(actions.updateTaskError(error.message)));
  };


  
const addTask = (obj) => dispatch => {
  dispatch(actions.createTaskRequest());
  axios
    .post('/task' , obj)
    .then(({ data }) => {
      return dispatch(actions.createTaskSuccess(data));
    })
    .catch(error => dispatch(actions.createTaskError(error.message)));
};

export default {
    getTask , 
    addTask, 
    updateTask,
    removeTask
}
