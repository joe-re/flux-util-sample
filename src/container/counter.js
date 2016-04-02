import { Component } from 'react';
import { Container } from 'flux/utils';
import CounterStore from './../flux_infra/count_store';

class CounterContainer extends Component {
  static getStores() {
    return [ CounterStore ];
  }

  static calculateState(prevState) {
    return {
      count: CounterStore.getState()
    };
  }

  render() {
    return <h1>Hello</h1>;
  }
}

export default Container.create(CounterContainer);
