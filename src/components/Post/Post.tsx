import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './Post.css';
import {CommentablePostData} from "../../models/CommentablePostData";
import {faCirclePlus, faFireFlameCurved, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getTimeText} from "../../helpers/timeTextHelper";
import {faMessage} from "@fortawesome/free-regular-svg-icons";
import {PostData} from "../../models/PostData";
import PostComment from "../PostComment/PostComment";

interface PostProps {
    postData: CommentablePostData,
}

const Post: FC<PostProps> = (props) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (input: string) => {
       setComment(input);
    }

    const handleCommentSubmit = () => {
        props.postData.comments.push(new PostData(props.postData.postData.user, comment));
        setComment('');
    }

    return (
        <div className="Post" data-testid="Post">
            <PostComment postData={props.postData.postData} />
            <div className="comment">
                <div className="comment-left">
                    <FontAwesomeIcon className="comment-icon" icon={faMessage} />
                    <input
                        value={comment}
                        className="comment-text"
                        placeholder="Add comment"
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                handleCommentSubmit();
                            }}}
                        onChange={event => handleCommentChange(event.currentTarget.value)}
                    />
                </div>
                <FontAwesomeIcon className="comment-icon" icon={faCirclePlus} />
            </div>
            {props.postData.comments.length > 0 && <hr className="post-comment-divider"/>}
            {props.postData.comments.map((post, index) => <PostComment key = {index} postData = {post} />)}
        </div>
    );
}

export default Post;
