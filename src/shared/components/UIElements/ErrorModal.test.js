import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorModal from './ErrorModal';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<ErrorModal />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <ErrorModal />
      </Wrapper>
    );
  });
});
