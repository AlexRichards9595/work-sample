import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatePost from './CreatePost';
import createPost from "./CreatePost";

describe('<CreatePost />', () => {
    test('it should mount', () => {
        render(<CreatePost createPost={() => {}}/>);

        const createPost = screen.getByTestId('CreatePost');

        expect(createPost).toBeInTheDocument();
  });

    test('it should clear input when form is submitted', () => {
        render(<CreatePost createPost= {() => {}}/>);

        const input = screen.getByPlaceholderText("What's on your mind?");

        fireEvent.change(input, { target: { value: 'post content'}});

        const form = screen.getByTestId('CreatePost');

        fireEvent.submit(form);

        expect(input).toHaveValue('');
    });

    test('it should call createPost with input text when form is submitted', () => {
        const createPost = jest.fn();
        render(<CreatePost createPost= {createPost}/>);

        const input = screen.getByPlaceholderText("What's on your mind?");

        fireEvent.change(input, { target: { value: 'post content'}});

        const form = screen.getByTestId('CreatePost');

        fireEvent.submit(form);

        expect(createPost).toBeCalledWith('post content');
    });
});