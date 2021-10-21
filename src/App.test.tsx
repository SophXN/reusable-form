import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MyForm } from './MyForm';
import * as ReactDOM from 'react-dom';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/First/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe('Testing of Form', () => {

  let container: HTMLDivElement

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(<MyForm />, container)
  })

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  })

  it('testing for correct render initial document', () => {
    const inputs = container.querySelectorAll('input');
    console.log(inputs);
    expect(inputs).toHaveLength(3)
  })
})