import React, {useState,useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './commentCreate';
import CommentList from './commentList';

export default () => {
    const [posts , setPosts] = useState({});

    const fetchData = async () => {
        const res = await axios.get('https://posts.com/posts');
        console.log(res.data);
        setPosts(res.data);
    };

    useEffect(()=>{
        fetchData();
    }, [] );

    const RenderPost = Object.values(posts).map(post => {
        return( <div className="card" 
        style={{width:'30%', marginBottom:'20px'}}
        key={post.id}>
            <div className='card-body'>
                <h3>{post.title}</h3>
                <CommentList comments ={post.comments} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
        );
    });

    return <div className="d-flex flex-row flex-wrap justify-content-between">
            {RenderPost}
        </div>;
}