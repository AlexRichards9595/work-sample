import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Post from './Post';
import {CommentablePostData} from "../../models/CommentablePostData";
import {User} from "../../models/User";
import {PostData} from "../../models/PostData";

describe('<Post />', () => {
    const postData = new CommentablePostData(new PostData(new User("username", "grumpy-cat.jpeg"), "post content"))
  test('it should mount', () => {
    render(<Post postData={postData}/>);

    const post = screen.getByTestId('Post');

    expect(post).toBeInTheDocument();
  });
});