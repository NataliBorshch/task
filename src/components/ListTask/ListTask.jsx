import selectors from '../../redux/task/selectors';
import './ListTask.scss';
import Task from '../Task/index';
import { connect } from 'react-redux';
import actions from '../../redux/task/actions';
import { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

class ListTask extends Component {
  render() {
    const { tasks, sortByUp, sortByDown } = this.props;

    return (
      tasks.length !== 0 && (
        <div className="section_tasks">
          <table className="table">
            <thead className="table_header">
              <tr>
                <th className="table_header_item">
                  Number
                  <span>
                    <button
                      type="button"
                      onClick={() => sortByUp('id')}
                      className="sort_up"
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </button>
                    <button
                      type="button"
                      className="sort_down"
                      onClick={() => sortByDown('id')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </span>
                </th>
                <th className="table_header_item">
                  Name
                  <span>
                    <button
                      type="button"
                      className="sort_up"
                      onClick={() => sortByUp('name')}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </button>
                    <button
                      type="button"
                      className="sort_down"
                      onClick={() => sortByDown('name')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </span>
                </th>
                <th className="table_header_item">
                  Date
                  <span>
                    <button
                      type="button"
                      className="sort_up"
                      onClick={() => sortByUp('date_created')}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </button>
                    <button
                      type="button"
                      className="sort_down"
                      onClick={() => sortByDown('date_created')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </span>
                </th>
                <th className="table_header_item">
                  Description
                  <span>
                    <button
                      type="button"
                      className="sort_up"
                      onClick={() => sortByUp('description')}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </button>
                    <button
                      type="button"
                      className="sort_down"
                      onClick={() => sortByDown('description')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </span>
                </th>
                <th className="table_header_item">
                  Status
                  <span>
                    <button
                      type="button"
                      className="sort_up"
                      onClick={() => sortByUp('status')}
                    >
                      <ArrowUpwardIcon fontSize="small" />
                    </button>
                    <button
                      type="button"
                      className="sort_down"
                      onClick={() => sortByDown('status')}
                    >
                      <ArrowDownwardIcon />
                    </button>
                  </span>
                </th>
                <th className="table_header_item">Priority</th>
                <th className="table_header_item">Change Task</th>
              </tr>
            </thead>
            <tbody>
              {tasks.length > 0 &&
                tasks.map(item => (
                  <tr key={item.id}>
                    <Task item={item} />
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  tasks: selectors.getVisibleTask(state),
});

const mapDispatchToProps = dispatch => ({
  sortByUp: value => dispatch(actions.SortTaskUp(value)),
  sortByDown: value => dispatch(actions.SortTaskDown(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);

export { ListTask };
