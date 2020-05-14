import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Modal from './Modal';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<Modal />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <Modal />
      </Wrapper>
    );
  });
});
