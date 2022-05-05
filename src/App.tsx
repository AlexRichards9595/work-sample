import React, {useState} from 'react';

import './App.css';
import Feed from "./components/Feed/Feed";
import {PostData} from "./models/PostData";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
    const [posts, setPosts] = useState<Array<PostData>>([]);
    const user = {
        username: "Alex Richards",
        pictureURL: 'grumpy-cat.jpeg'
    };

    const createPost = (content: string) => {
        setPosts([...posts, new PostData(user.username, user.pictureURL, content)])
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
