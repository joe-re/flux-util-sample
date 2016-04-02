import { Component } from 'react';
import { Container } from 'flux/utils';
import CounterStore from './../flux_infra/count_store';
import CounterUI from './../components/counter_ui';

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
    return <CounterUI count={this.state.count} />;
  }
}

export default Container.create(CounterContainer);
