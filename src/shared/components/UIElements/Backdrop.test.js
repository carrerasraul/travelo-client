import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Backdrop from './Backdrop';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Backdrop />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Backdrop />
      </Wrapper>
    );
  });
});
