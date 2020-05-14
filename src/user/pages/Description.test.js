import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Description from './Description';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Description />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Description />
      </Wrapper>
    );
  });
});
