import React from 'react'; 
import { render, fireEvent, screen } from '@testing-library/react';
import DummyComponent from '../Dummy';
import {useCustomHook}  from '../hooks/useCustomHook';


const mockHandleClick = jest.fn().mockImplementation(() => console.log("mock handler"));

jest.mock('../hooks/useCustomHook', () => ({
  useCustomHook: () => ({
    handleClick: jest.fn().mockImplementation(mockHandleClick),
  }),
}));

test('setValue is called on button click', () => {
  render(<DummyComponent />);
  const button = screen.getByRole('button');
  
  fireEvent.click(button);



  // Assert that setValue was called
  expect(mockHandleClick).toHaveBeenCalled();
});
