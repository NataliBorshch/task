import { Component } from 'react';
import StarIcon from '@material-ui/icons/Star';
import './TaskInfo.scss';

class TaskInfo extends Component {
  render() {
    return (
      <div className="box_infoTask">
        <p className="text">
          All Task{' '}
          <span className="date">{new Date().toLocaleDateString()}</span>
        </p>
        <ul className="list_info">
          <li className="item_info">
            <StarIcon />

            <p>0</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p>0</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p>0</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p>0</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default TaskInfo;
