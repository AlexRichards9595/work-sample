import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from './Post';
import {PostData} from "../../models/PostData";

describe('<Post />', () => {
    const postData = new PostData("username", "profilePictureURL", "post content")
  test('it should mount', () => {
    render(<Post postData={postData}/>);

    const post = screen.getByTestId('Post');

    expect(post).toBeInTheDocument();
  });
});