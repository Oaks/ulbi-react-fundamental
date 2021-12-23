import React, {useState} from 'react';
import "./components/styles/App.css";
import PostList from './components/PostList';
import MyButton from "./components/UI/button/MyButton.jsx";
import MyInput from "./components/UI/input/MyInput.jsx";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"}
    ]
    )
    const [post, setPost] = useState({title: "", body: ""});

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: "", body: ""});
    }

    return (
        <div className="App">
            <form>
                <MyInput
                    type="text"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    placeholder="Название поста" />
                <MyInput
                    type="text"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    placeholder="Описание поста" />

                <MyButton onClick={addNewPost} >Создать пост</MyButton>
            </form>

            <PostList posts={posts} title="Список постов" />
        </div>
    );
}

export default App;
