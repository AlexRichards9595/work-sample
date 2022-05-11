import React, {FC, useEffect, useState} from 'react';
import './Post.css';
import {PostData} from "../../models/PostData";
import {faFireFlameCurved, faShareNodes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getTimeText} from "../../helpers/timeTextHelper";

interface PostProps {
    postData: PostData,
}

const Post: FC<PostProps> = (props) => {
    const [timeText, setTimeText] = useState(getTimeText(props.postData.dateCreated));
    useEffect(() => {
        setInterval(() => {
            setTimeText(getTimeText(props.postData.dateCreated));
        }, 1000);
    })

    return (
        <div className="Post" data-testid="Post">
            <div className="post-header">
                <img src={require(`../../assets/images/${props.postData.user.profilePicture}`)} alt={"Profile"}/>
                <div className="post-header-text">
                    <h2>{props.postData.user.username}</h2>
                    <p>{timeText}</p>
                </div>
            </div>
            <div className="post-body">
                {props.postData.content}
                <div className="post-counts">
                    <FontAwesomeIcon className="icon" icon={faFireFlameCurved}/>
                    <p>{props.postData.hypes} Hypes</p>
                    <FontAwesomeIcon className="icon" icon={faShareNodes}/>
                    <p>12 Shares</p>
                    <p>100 Views</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
