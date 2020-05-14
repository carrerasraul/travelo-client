import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UpdatePlace from './UpdatePlace';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<UpdatePlace />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <UpdatePlace />
      </Wrapper>
    );
  });
});
