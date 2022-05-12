import React, {FC, useState} from 'react';
import './Post.css';
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-regular-svg-icons";
import {PostData} from "../../models/PostData";
import PostComment from "../PostComment/PostComment";

interface PostProps {
    postData: PostData,
    updatePosts(post: PostData): any
}

const Post: FC<PostProps> = (props) => {
    const [commentInput, setCommentInput] = useState('');

    const handleCommentChange = (input: string) => {
       setCommentInput(input);
    }

    const handleCommentSubmit = () => {
        props.postData.comments.push(new PostData(props.postData.user, commentInput));
        setCommentInput('');
    }

    const handleCommentHype = (index: number) => {
        const updatedPost = {
            ...props.postData,
            comments: props.postData.comments.map((e, i) => {
                if (i === index) {
                    e.hypes++
                    return e;
                }
                return e
            })
        }
        props.updatePosts(updatedPost);
    }

    return (
        <div className="Post" data-testid="Post">
            <PostComment postData={props.postData} addHype={() => props.updatePosts({...props.postData, hypes: props.postData.hypes + 1})}/>
            <div className="comment">
                <div className="comment-left">
                    <FontAwesomeIcon className="comment-icon" icon={faMessage} />
                    <input
                        value={commentInput}
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
            {props.postData.comments.map((post, index) => <PostComment addHype={() => handleCommentHype(index)} key = {index} postData = {post} />)}
        </div>
    );
}

export default Post;
