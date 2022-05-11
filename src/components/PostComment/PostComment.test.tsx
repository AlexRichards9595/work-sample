import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostComment from './PostComment';
import {User} from "../../models/User";
import {PostData} from "../../models/PostData";

describe('<PostComment />', () => {
  const postData = new PostData(new User("username", "grumpy-cat.jpeg"), "post content")

  test('it should mount', () => {
    render(<PostComment postData={postData}/>);
    
    const postComment = screen.getByTestId('PostComment');

    expect(postComment).toBeInTheDocument();
  });
});