import React, {useState} from 'react';

import './App.css';
import CreatePost from "./components/CreatePost/CreatePost";
import {User} from "./models/User";
import {PostData} from "./models/PostData";
import Post from "./components/Post/Post";
import {addHype} from "./helpers/addHypeHelper/addHypeHelper";

function App() {
    const [posts, setPosts] = useState<PostData[]>([]);
    const user: User = {
        username: "Alex Richards",
        profilePicture: 'grumpy-cat.jpeg'
    };

    const createPost = (content: string) => {
        setPosts([new PostData(user, content), ...posts])
    }

    const handleHype = (index: number) => {
        setPosts(addHype(posts, index));
    }

    const updatePost = (post: PostData, index: number) => {
        setPosts(posts.map((e, i) => {
            if (i === index) {
                e = post
            }
            return e
        }))
    }

    return (
    <div className="App">
        <div className='container'>
            <CreatePost createPost = {(content) => createPost(content)}/>
            {posts.map((post, index) => <Post key={index} updatePosts={(post) => updatePost(post, index)} postData={post}/>)}
        </div>
    </div>
    );
}

export default App;
