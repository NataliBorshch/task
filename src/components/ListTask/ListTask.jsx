import selectors from '../../redux/task/selectors';
import sortBy from 'lodash.sortby';
import './ListTask.scss';
import Task from '../Task/index';
import { Component } from 'react';
import { connect } from 'react-redux';

// export default function ListTask() {
//   const tasks = useSelector(selectors.getVisibleTask);
//   const [taskSort, setTaskSort] = useState([]);

//   useEffect(() => {
//     setTaskSort(tasks);
//   }, [tasks]);

//   const sortByUp = value => {
//     const lodash = sortBy(tasks, [
//       function (o) {
//         return o[value];
//       },
//     ]);
//     setTaskSort(lodash);
//   };

//   const sortByDown = value => {
//     const lodash = sortBy(tasks, [
//       function (o) {
//         return o[value];
//       },
//     ]);
//     setTaskSort(lodash.reverse());
//   };

//   return (
//     <div>
//       <table className="table">
//         <caption>The Beatles</caption>
//         <thead className="label">
//           <tr>
//             <th className="title">
//               Number
//               <button type="button" onClick={() => sortByUp('id')}>
//                 +
//               </button>
//               <button type="button" onClick={() => sortByDown('id')}>
//                 -
//               </button>
//             </th>
//             <th className="title">
//               Name
//               <button type="button" onClick={() => sortByUp('name')}>
//                 +
//               </button>
//               <button type="button" onClick={() => sortByDown('name')}>
//                 -
//               </button>
//             </th>
//             <th className="title">
//               Date
//               <button type="button" onClick={() => sortByUp('date_created')}>
//                 +
//               </button>
//               <button type="button" onClick={() => sortByDown('date_created')}>
//                 -
//               </button>
//             </th>
//             <th className="title">
//               Description
//               <button type="button" onClick={() => sortByUp('description')}>
//                 +
//               </button>
//               <button type="button" onClick={() => sortByDown('description')}>
//                 -
//               </button>
//             </th>
//             <th className="title">
//               Status
//               <button type="button" onClick={() => sortByUp('status')}>
//                 +
//               </button>
//               <button type="button" onClick={() => sortByDown('status')}>
//                 -
//               </button>
//             </th>
//             <th className="title">
//               Priority <button>sort by priopitet</button>
//             </th>
//             <th className="title">Change Task</th>
//           </tr>
//         </thead>
//         <tbody>
//           {taskSort.length > 0 &&
//             taskSort.map(item => (
//               <tr key={item.id}>
//                 <Task item={item} />
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

class ListTask extends Component {
  state = {
    tasks: [],
  };
  componentDidMount() {
    this.setState({ tasks: [...this.props.tasks] });
    console.log(this.props.tasks);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tasks !== this.props.tasks) {
      this.setState({ tasks: [...prevProps.tasks, ...this.props.tasks] });
    }
  }

  sortByUp = value => {
    const sortTask = sortBy(this.state.tasks, [
      function (o) {
        return o[value];
      },
    ]);
    this.setTaskSort(sortTask);
  };

  sortByDown = value => {
    const sortTasks = sortBy(this.state.tasks, [
      function (o) {
        return o[value];
      },
    ]);
    this.setTaskSort(sortTasks.reverse());
  };

  render() {
    const { tasks } = this.state;
    return (
      tasks && (
        <div className="section_tasks">
          <table className="table">
            <thead className="table_header">
              <tr>
                <th className="table_header_item">
                  Number
                  <button type="button" onClick={() => this.sortByUp('id')}>
                    +
                  </button>
                  <button type="button" onClick={() => this.sortByDown('id')}>
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Name
                  <button type="button" onClick={() => this.sortByUp('name')}>
                    +
                  </button>
                  <button type="button" onClick={() => this.sortByDown('name')}>
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Date
                  <button
                    type="button"
                    onClick={() => this.sortByUp('date_created')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => this.sortByDown('date_created')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Description
                  <button
                    type="button"
                    onClick={() => this.sortByUp('description')}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => this.sortByDown('description')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Status
                  <button type="button" onClick={() => this.sortByUp('status')}>
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => this.sortByDown('status')}
                  >
                    -
                  </button>
                </th>
                <th className="table_header_item">
                  Priority <button>sort by priopitet</button>
                </th>
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

export default connect(mapStateToProps)(ListTask);
