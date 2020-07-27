import React from 'react';
import { connect } from 'react-redux';
import { deletePost, openEditPost, editPost, closeEdit } from '../../actions/actions';
import './blog.css';


const Blog = ({ posts = [], isAutorisation, deletePost, openEditPost, editPost, closeEdit }) => {

    const submit = (e) => {
        e.preventDefault();
    }

    let _imageUrl, _paragraph, _title;
        
    return (
        <>
            {   (isAutorisation) ?
                    posts.map( post => (
                        (post.edit) ?
                            <div className="wrapper-post" key={post.id}>
                                <form className='post-edit-form' onSubmit={ submit }>
                                    <input defaultValue={post.imageUrl} ref={ input => _imageUrl = input }/>
                                    <input defaultValue={ post.title } ref={ input => _title = input }/>
                                    <textarea defaultValue={post.paragraph} ref={ input => _paragraph = input }/>
                                    <button onClick={ () => 
                                        editPost(
                                            { 
                                                id: post.id, 
                                                paragraph: _paragraph.value, 
                                                title: _title.value, 
                                                imageUrl: _imageUrl.value 
                                            }
                                        ) }> Измеить </button>
                                    <button onClick={ () => closeEdit(post)} > Закрыть редактирование </button>
                                </form>
                            </div> :
                            <div className="wrapper-post" key={post.id}>
                                <div className='post'>
                                    <button onClick={() => openEditPost(post.id) }> Редактировать </button>
                                    <button onClick={ () => deletePost(post.id) }> Удалить </button>
                                    <img className='post__image' src={post.imageUrl} alt={post.title}/>
                                    <h2 className='post__title'>{ post.title }</h2>
                                    <p className='post__paragraph'>{post.paragraph}</p>
                                </div>
                            </div>
                    )) :
                    posts.map( post => (
                        <div className="wrapper-post" key={post.id}>
                            <div className='post' >
                                <img className='post__image' src={post.imageUrl} alt={post.title}/>
                                <h2 className='post__title'>{ post.title }</h2>
                                <p className='post__paragraph'>{post.paragraph}</p>
                            </div>
                        </div>
                    ))
            }
        </>
    )
}
const mapStateToProps = ({ posts, isAutorisation }) => {
    return {
        posts,
        isAutorisation
    }
}

const mapDispathToProps = {
    deletePost,
    openEditPost,
    editPost,
    closeEdit
}

export default connect(mapStateToProps, mapDispathToProps)(Blog);