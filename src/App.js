import React, {useState} from 'react';
import "./components/styles/App.css";
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from './hooks/usePosts';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "аа", body: "щщ"},
        {id: 2, title: "гг", body: "фф"},
        {id: 3, title: "бб", body: "яяя"}
    ]
    )
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false)

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const createPost = (post) => {
        setPosts([...posts, post]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </MyModal>
            <hr style={{margin: "15px 0"}} />

            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постов" />
        </div>
    );
}

export default App;
