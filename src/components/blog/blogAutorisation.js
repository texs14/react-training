import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost, openEditPost } from '../../actions/actions';
import { reduceText } from '../../functions';

const BlogAutorisation = ({ post, openEditPost, deletePost }) => {

    const history = useHistory(); 

    return(
        <div className="wrapper-post">
            <div className='post'>
                <button onClick={() => openEditPost(post.id) }> Редактировать </button>
                <button onClick={ () => deletePost(post.id) }> Удалить </button>
                <img className='post__image' src={post.imageUrl} alt={post.title}/>
                <h2 className='post__title'>{ post.title }</h2>
                <p className='post__paragraph' >{ reduceText( post.discription, 100 ) }</p>
                <button onClick={ () => history.push({ pathname: `/blog/${post.id}`}) }> Читать полностью</button>
            </div>
        </div>
    )
}

const mapDispathToProps = {
    deletePost,
    openEditPost,
}

export default connect(null, mapDispathToProps)(BlogAutorisation);
