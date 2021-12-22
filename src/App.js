import React from 'react';
import "./components/styles/App.css";
import PostItem from "./components/PostItem.jsx";

function App() {
    return (
        <div className="App">
            <PostItem post={{id: 1, title: "Javascript", body: "Description"}} />
            <PostItem post={{id: 1, title: "Javascript", body: "Description"}} />
            <PostItem post={{id: 1, title: "Javascript", body: "Description"}} />
        </div>
    );
}

export default App;
