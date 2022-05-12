import React, {useState} from 'react';

import './App.css';
import Feed from "./components/Feed/Feed";
import {CommentablePostData} from "./models/CommentablePostData";
import CreatePost from "./components/CreatePost/CreatePost";
import {User} from "./models/User";
import {PostData} from "./models/PostData";

function App() {
    const [posts, setPosts] = useState<Array<CommentablePostData>>([]);
    const user: User = {
        username: "Alex Richards",
        profilePicture: 'grumpy-cat.jpeg'
    };

    const createPost = (content: string) => {
        setPosts([new CommentablePostData(new PostData(user, content)), ...posts])
    }
    return (
    <div className="App">
        <div className='container'>
            <CreatePost createPost = {(content) => createPost(content)}/>
            <Feed posts = {posts}/>
        </div>
    </div>
    );
}

export default App;
