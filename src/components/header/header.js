import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logout } from '../../actions/actions';
import './header.css';

const Header = ({ isAutorisation, logout }) => {
    const history = useHistory();
    

    return  (
        <header>
            <nav className='menu'>
                <ul className='menu__list'>
                    <li className='menu__item'><Link to='/'>На главную</Link></li>
                    <li className='menu__item'><Link to='/blog'>Блог</Link></li>
                    <li className='menu__item'><Link to='/profile'> Профиль </Link></li>
                    {
                        (isAutorisation) ? 
                        <li className='menu__item menu__item-last'><Link onClick={ logout }> Выйти </Link></li> :
                        <li className='menu__item menu__item-last'><Link onClick={() => history.push({ pathname: '/login' }) }> Войти </Link></li>
                    }
                </ul>
            </nav>
        </header>
    )
}

const mapStateToProps = ({ isAutorisation }) => {
    return {
        isAutorisation
    };
};

const mapDispatchToProps = {
    logout
}



export default connect(mapStateToProps, mapDispatchToProps)(Header);