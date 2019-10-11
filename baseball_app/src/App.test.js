import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from './Components/Dashboard'
import Display from './Components/Display'

afterEach(rtl.cleanup);

// test('Render the app', () => {
//   const wrapper = rtl.render(<App />)
//   const element = wrapper.getAllBy( button)
//     expect(element).toBeVisible()
// // const element = wrapper.fireEvent.click(button)
// //   expect(element).toHaveValue(0)
// })

test('Render App', () => {
  const wrapper = rtl.render(<App />)
  wrapper.debug()
})

test('strike render to app', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/strike/i)
  expect(element);
}) 

test("Renders the Dashboard", () => {
  const wrapper = rtl.render(<Dashboard />);
  const buttons = wrapper.getAllByRole('button');
  expect(buttons);
})








