import React from 'react';

export default class CounterUI extends React.Component {
  render() {
    return(
      <div className="counter">
        <h1>Couunter</h1>
        <div>Count: {this.props.count}</div>
        <div className="actions">
          <button>Inc</button>
          <button>Dec</button>
        </div>
      </div>
    );
  }
};
