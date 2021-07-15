import { Component } from 'react';
import './Timer.scss';
class Timer extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>
        <p className="timer"> {this.state.time}</p>
      </div>
    );
  }
}

export default Timer;

export { Timer };
