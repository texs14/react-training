import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import BlogAutorisation from '../blog/blogAutorisation';
// import BlogNotAutorisation from '../blog/blogNotAutorisation';

const PostOpen = ( { postId = '', posts = []}) => {

    const post = posts.filter( post => post.id === postId )[0];

    const history = useHistory();

    return (
        <div className='post-open' >
            <button onClick={ () => history.goBack() }> Назад </button>
            <img className='post-open__image' src={post.imageUrl} alt={post.title}/>
            <h2 className='post-open__title'>{ post.title }</h2>
            <div className='post-open__paragraph' dangerouslySetInnerHTML={post.paragraph} />
        </div>
    )
}

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

export default connect(mapStateToProps, null)(PostOpen);