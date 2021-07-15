import selectors from '../../redux/task/selectors';
import './ListTask.scss';
import Task from '../Task/index';
import { connect } from 'react-redux';
import actions from '../../redux/task/actions';
import { Component } from 'react';

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
                  <button
                    type="button"
                    className="sort_up"
                    onClick={() => sortByUp('id')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="sort_down"
                    onClick={() => sortByDown('id')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Name
                  <button
                    type="button"
                    className="sort_up"
                    onClick={() => sortByUp('name')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="sort_down"
                    onClick={() => sortByDown('name')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Date
                  <button
                    type="button"
                    className="sort_up"
                    onClick={() => sortByUp('date_created')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="sort_down"
                    onClick={() => sortByDown('date_created')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Description
                  <button
                    type="button"
                    className="sort_up"
                    onClick={() => sortByUp('description')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="sort_down"
                    onClick={() => sortByDown('description')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Status
                  <button
                    type="button"
                    className="sort_up"
                    onClick={() => sortByUp('status')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="sort_down"
                    onClick={() => sortByDown('status')}
                  >
                    -
                  </button>
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
