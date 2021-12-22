import React, {useState} from 'react';
import "./components/styles/App.css";
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"}
    ]
    )

    return (
        <div className="App">
            <PostList posts={posts} title="Список постов" />
        </div>
    );
}

export default App;
