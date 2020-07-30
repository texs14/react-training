import React from 'react';
import { connect } from 'react-redux';
import BlogEdit from './blogEdit';
import BlogAutorisation from './blogAutorisation';
import BlogNotAutorisation from './blogNotAutorisation';
import './blog.css';


const Blog = ({ posts = [], isAutorisation = false }) => {

    return (
        <>
            {   
                (isAutorisation) ?
                    posts.map( post => (
                        (post.edit) ?
                            <BlogEdit post={ post } key={ post.id }/> :
                            <BlogAutorisation post={ post } key={ post.id }/>
                    )) :
                    posts.map( post => (
                        <BlogNotAutorisation post={ post } key={ post.id }/>
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


export default connect(mapStateToProps, null)(Blog);