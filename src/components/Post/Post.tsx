import React, {FC, useState} from 'react';
import './Post.css';
import {faCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMessage} from "@fortawesome/free-regular-svg-icons";
import {PostData} from "../../models/PostData";
import PostComment from "../PostComment/PostComment";
import {addHype} from "../../helpers/addHypeHelper/addHypeHelper";

interface PostProps {
    postData: PostData,
    addHype(): any
}

const Post: FC<PostProps> = (props) => {
    const [commentInput, setCommentInput] = useState('');
    const [comments, setComments] = useState<PostData[]>([])

    const handleCommentChange = (input: string) => {
       setCommentInput(input);
    }

    const handleCommentSubmit = () => {
        setComments([...comments, new PostData(props.postData.user, commentInput)]);
        setCommentInput('');
    }

    const handleHype = (index: number) => {
        setComments(addHype(comments, index));
    }

    return (
        <div className="Post" data-testid="Post">
            <PostComment postData={props.postData} addHype={() => props.addHype()}/>
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
            {comments.length > 0 && <hr className="post-comment-divider"/>}
            {comments.map((post, index) => <PostComment addHype={() => handleHype(index)} key = {index} postData = {post} />)}
        </div>
    );
}

export default Post;
