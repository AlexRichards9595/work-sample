import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('it should post content when Post button is clicked', () => {
    render(<App />);

    expect(screen.queryByTestId('Post')).not.toBeInTheDocument();

    const input = screen.getByPlaceholderText("What's on your mind?");
    const postButton = screen.getByText('Post');

    fireEvent.change(input, { target: { value: 'Post text content'}})
    fireEvent.click(postButton);

    expect(screen.getAllByTestId('Post').length).toBe(1);
    expect(screen.getByTestId('Post')).toHaveTextContent('Post text content');
  });
});
