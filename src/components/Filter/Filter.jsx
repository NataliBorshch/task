import { connect } from 'react-redux';
import selectors from '../../redux/task/selectors';
import actions from '../../redux/task/actions';
// styles
import './Filter.scss';

//DONE

const Filter = ({ filter, getFilter }) => {
  return (
    <div className="filter_search">
      <label className="form_label_filter">
        Filter by Status Task
        <input
          type="text"
          value={filter}
          onChange={getFilter}
          className="form_input_filter"
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

// export { Filter };
