import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogNotAutorisation = ({ post }) => {

    const history = useHistory();

    return(
        <div className="wrapper-post" >
            <div className='post' >
                <img className='post__image' src={post.imageUrl} alt={post.title}/>
                <h2 className='post__title'>{ post.title }</h2>
                <p className='post__paragraph' >{ post.discription }</p>
                <button onClick={ () => history.push({ pathname: `/blog/${post.id}`}) }> Читать полностью</button>
            </div>
        </div>
    )
}


export default BlogNotAutorisation;
