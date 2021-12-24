import React, {useState} from 'react';
import "./components/styles/App.css";
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"}
    ]
    )

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostList remove={removePost} posts={posts} title="Список постов" />
        </div>
    );
}

export default App;
