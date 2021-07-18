import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
// redux
import selectors from '../../../redux/task/selectors';

// done

class PieChart extends Component {
  getCountTaskStatus = (array, FoundStatus) => {
    const result = array.filter(({ status }) => status === FoundStatus);
    return result ? result.length : 0;
  };

  render() {
    const { allTask } = this.props;
    const TODO = this.getCountTaskStatus(allTask, 'TODO');
    const READY = this.getCountTaskStatus(allTask, 'READY');
    const COMPLETED = this.getCountTaskStatus(allTask, 'IN PROGRESS');
    const INPROGRESS = this.getCountTaskStatus(allTask, 'COMPLETED');

    const data = {
      labels: ['TODO', 'READY', 'IN PROGRESS', 'COMPLETED'],
      datasets: [
        {
          label: '# of Votes',
          data: [TODO, READY, COMPLETED, INPROGRESS],
          backgroundColor: [
            'white',
            'rgb(54, 169, 235)',
            '#e9e512',
            'rgb(39, 211, 111)',
          ],
          borderColor: ['#c7afa1', '#6a7da1', '#e96112', 'rgb(18, 71, 18)'],
          borderWidth: 1,
        },
      ],
    };

    return (
      <>
        <Pie data={data} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  allTask: selectors.getTasks(state),
});

export default connect(mapStateToProps, null)(PieChart);
