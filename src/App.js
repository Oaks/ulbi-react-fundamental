import React, {useMemo, useState} from 'react';
import "./components/styles/App.css";
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from "./components/UI/select/MySelect";
import MyInput from './components/UI/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"}


        // {id: 1, title: "аа", body: "щщ"},
        // {id: 2, title: "гг", body: "фф"},
        // {id: 3, title: "бб", body: "яяя"}
    ]
    )
    const [selectedSort, setSelectedSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return setPosts([...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort])));
        }
        return posts;
    }, [selectedSort, posts])

    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />

            <MyInput
                placeholder="Поиск..."
                value={searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value)}}
            />

            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: "title", name: "По названию"},
                    {value: "body", name: "По описанию"}
                ]}
            />
            {
                posts.length
                    ? <PostList remove={removePost} posts={sortedPosts} title="Список постов" />
                    : <h1 style={{textAlign: "center"}}>
                        Посты не найдены
                    </h1>
            }
        </div>
    );
}

export default App;
