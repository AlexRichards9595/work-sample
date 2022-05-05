import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatePost from './CreatePost';

describe('<CreatePost />', () => {
    test('it should mount', () => {
        render(<CreatePost createPost={() => {}}/>);

        const createPost = screen.getByTestId('CreatePost');

        expect(createPost).toBeInTheDocument();
  });
});