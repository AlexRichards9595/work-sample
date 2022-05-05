import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from "./components/Feed/Feed";
import {PostData} from "./models/PostData";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
    const [posts, setPosts] = useState<Array<PostData>>([]);
    const username = "Alex Richards";

    const createPost = (content: string) => {
        setPosts([...posts, new PostData(username, content)])
    }
    return (
    <div className="App">
        <div>
            <CreatePost createPost = {(content) => createPost(content)}/>
            <Feed posts = {posts}/>
        </div>
    </div>
    );
}

export default App;
