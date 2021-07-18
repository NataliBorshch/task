import { Component } from 'react';
import { connect } from 'react-redux';
// materia
import StarIcon from '@material-ui/icons/Star';
// redux
import taskSelector from '../../redux/task/selectors';
// styles
import './TaskInfo.scss';

// done

class TaskInfo extends Component {
  getCountTaskStatus(array, foundStatus) {
    const result = array.filter(({ status }) => status === foundStatus);
    return result ? result.length : 0;
  }

  render() {
    const { allTask } = this.props;
    const TODO = this.getCountTaskStatus(allTask, 'TODO');
    const READY = this.getCountTaskStatus(allTask, 'READY');
    const COMPLETED = this.getCountTaskStatus(allTask, 'COMPLETED');
    const INPROGRESS = this.getCountTaskStatus(allTask, 'IN PROGRESS');
    return (
      <div className="box_infoTask">
        <p className="text">
          All Task
          <span className="date">{new Date().toLocaleDateString()}</span>
        </p>
        <ul className="list_info">
          <li className="item_info">
            <StarIcon />

            <p className="item_count">TODO :{TODO}</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p className="item_count"> READY :{READY}</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p className="item_count"> IN PROGRESS : {INPROGRESS}</p>
          </li>
          <li className="item_info">
            <StarIcon />

            <p className="item_count"> COMPLETED :{COMPLETED}</p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allTask: taskSelector.getTasks(state),
});

export default connect(mapStateToProps, null)(TaskInfo);
