import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Card from './Card';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Card />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Card />
      </Wrapper>
    );
  });
});
