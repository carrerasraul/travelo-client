import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Map from './Map';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Map />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Map />
      </Wrapper>
    );
  });
});
