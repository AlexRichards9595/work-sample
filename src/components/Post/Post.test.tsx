import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from './Post';
import {PostData} from "../../models/PostData";
import {User} from "../../models/User";

describe('<Post />', () => {
    const postData = new PostData(new User("username", "grumpy-cat.jpeg"), "post content")
  test('it should mount', () => {
    render(<Post postData={postData}/>);

    const post = screen.getByTestId('Post');

    expect(post).toBeInTheDocument();
  });
});