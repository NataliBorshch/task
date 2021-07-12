import selectors from '../../redux/task/selectors';
import actions from '../../redux/task/actions';
import './Filter.scss';
import { connect } from 'react-redux';

//DONE

const Filter = ({ filter, getFilter }) => {
  return (
    <div className="filter_search">
      <label className="form_label">
        Filter by name Task
        <input
          type="text"
          value={filter}
          onChange={getFilter}
          className="form_input"
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  getFilter: event => dispatch(actions.filterTask(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

export { Filter };
