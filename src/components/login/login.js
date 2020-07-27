import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../actions/actions';
import './login.css';

const Login = ( { login }) => {

    let _login, _password;
    let history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        if (_login.value === 'admin' && _password.value === 'qwerty') {
            login();
            history.push({ pathname: "/profile" });
        } else alert('не правильный логин или пароль');
    }
    
    return (
        <form className='form-login' onSubmit={ submit }>
            <input className='form-login__input' ref={ input => _login = input} type='text' placeholder=' Введите логин'/>
            <input className='form-login__input' ref={ input => _password = input } type='password' placeholder=' Введите паролб'/>
            <button className='form-login__button'> Войти </button>
        </form>
    )
}

const mapDispatchToProps =  {
    login
};

export default connect(null, mapDispatchToProps)(Login);