import {React, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });
    const [fetchCommentsPostById, isCommLoading, commError] = useFetching(async (id) => {
        const response = await PostService.getCommentsById(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsPostById(params.id)
    }, [])

    return (
        <div className="App">

            <h2>Вы открыли страницу с постом id={params.id}</h2>
            {error &&
                <h3>Произошла ошибка при загрузку поста</h3>}
            {isLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}} ><Loader /></div>
                : <div>{post.id}. {post.title}</div>
            }

            {commError &&
                <h3>Произошла ошибка при загрузку поста</h3>}
            {isCommLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}} ><Loader /></div>
                : <div>
                    <h4 style={{marginTop: '15px', textAlign: "center"}}>Комментарии</h4>
                    {
                        comments.map(c =>
                            <div style={{marginTop: 15}} key={c.id}>
                                <h4>{c.email}</h4>
                                <div>{c.body}</div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default PostIdPage;

