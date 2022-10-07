import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><NavBar /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
describe('App', () => {
  it('renders without crashing', () => {
    const element = render(
      <Router><NavBar /></Router>,
    );
    expect(element).toBeTruthy();
  });
});
