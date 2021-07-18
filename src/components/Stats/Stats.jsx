import { Component } from 'react';
import PieChart from './Chart';
import './Stats.scss';

// done

class Stats extends Component {
  render() {
    return (
      <div className="page_stats">
        <h1 className="page_name">Statistics of your tasks all the time</h1>
        <PieChart />
      </div>
    );
  }
}

export default Stats;
