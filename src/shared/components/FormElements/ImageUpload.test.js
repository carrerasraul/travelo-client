import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ImageUpload from './ImageUpload';

const Wrapper = (props) => {
  return (
    <Switch>
      <Route>{props.children}</Route>
    </Switch>
  );
};

describe.only('<ImageUpload />', () => {
  it('Renders without crashing', () => {
    shallow(
      <Wrapper>
        <ImageUpload />
      </Wrapper>
    );
  });
});
