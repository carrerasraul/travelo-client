import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Input from './Input';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Input />
      </Wrapper>
    );
  });
});
