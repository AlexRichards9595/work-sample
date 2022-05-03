import React, { FC } from 'react';
import './Post.css';
import {PostData} from "../../models/PostData";

interface PostProps {
    postData: PostData,
}

const Post: FC<PostProps> = (props) => (
  <div className="Post" data-testid="Post">
      <div className="post-header">
          {props.postData.username}
      </div>
      <div className="post-body">
          {props.postData.content}
          <div className="post-counts">
              <p>{props.postData.hypes} hypes</p>
              <p>{props.postData.shares} shares</p>
              <p>{props.postData.views} views</p>
          </div>
      </div>
  </div>
);

export default Post;
