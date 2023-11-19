
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countInit = Number(screen.getByTestId("count").textContent);
  expect(countInit).toEqual(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole("button",{name: "+"});
  fireEvent.click(button);
  const countInit = Number(screen.getByTestId("count").textContent);
  expect(countInit).toEqual(1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const button = screen.getByRole("button",{name: "-"});
  fireEvent.click(button);
  const countInit = Number(screen.getByTestId("count").textContent);
  expect(countInit).toEqual(-1);
});
