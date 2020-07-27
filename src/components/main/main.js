import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Home from '../home/home';
import BlogsList from '../blogsList/blogsList';
import Profile from '../profile/profile';
import Login from '../login/login';
import PostForm from '../postForm/postForm';



const Main = ({ isAutorisation }) => {
    return (
        <main>
            <Route exact path='/' component={Home}/> 
            <Route path='/blog' component={BlogsList} /> 
            <Route path='/profile' render={() => 
                (isAutorisation) ? 
                    <Profile/> :
                    <Redirect from='/profile' to='/login'/>
                }/>
            <Route path='/login' component={Login}/>
            <Route path='/post-form' component={PostForm}/>
        </main>
    )
}

const mapStateToProps = ({ isAutorisation }) => {
    return {
        isAutorisation
    };
};



export default connect(mapStateToProps, null)(Main);