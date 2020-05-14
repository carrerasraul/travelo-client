import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Button from './Button';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Button />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Button />
      </Wrapper>
    );
  });
});
