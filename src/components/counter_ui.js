import React from 'react';
import CounterAction from './../flux_infra/actions';

export default class CounterUI extends React.Component {
  handleClickIncButton() { CounterAction.increment(); }
  handleClickDecButton() { CounterAction.decrement(); }

  render() {
    return(
      <div className="counter">
        <h1>Couunter</h1>
        <div>Count: {this.props.count}</div>
        <div className="actions">
          <button onClick={this.handleClickIncButton.bind(this)}>Inc</button>
          <button onClick={this.handleClickDecButton.bind(this)}>Dec</button>
        </div>
      </div>
    );
  }
};
