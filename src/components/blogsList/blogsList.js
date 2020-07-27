import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Blog from '../blog/blog';

const BlogsList = ({ isAutorisation }) =>  

    (isAutorisation) ?
        <>
            <button><Link to='/post-form'> Добавить пост </Link></button>
            <Blog />
        </> :
        <Blog />

const mapStateToProps = ({ isAutorisation }) => {
    return {
        isAutorisation
    }
}

export default connect(mapStateToProps)(BlogsList);

