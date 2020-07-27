import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addPost } from '../../actions/actions';
import { v4 } from 'uuid';
import './postForm.css';


const PostForm = ({ addPost }) => {
    let _imgUrl, _title, _paragraph;
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        history.push({ pathname: '/blog' });

    }

    return (
        <form className='post-form' onSubmit={ submit }>
            <label className='post-form__label'>
                <span> Ссылка на изображение </span>
                <input className='post-form__input' type='text' ref={ input => _imgUrl = input }/>
            </label>
            <label className='post-form__label'> 
                <span> Заголовок поста </span>
                <input className='post-form__input' type='text' ref={ input => _title = input }/>
            </label>
            <lable className='post-form__label'> 
                <span> Текст поста </span>
                <textarea className='post-form__textarea' ref={ input => _paragraph = input }/>
            </lable>
            <button className='post-form__button' 
                onClick={ () => 
                    addPost(
                        { 
                            id: v4(),
                            title: _title.value,
                            paragraph: _paragraph.value,
                            imageUrl: _imgUrl.value,
                            edit: false
                        }
                    ) 
                }> Добавить </button>
        </form>
    )
}

const mapStateToProps = () => {

}

const mapDispatchToProps = {
    addPost
}

export default connect(null, mapDispatchToProps)(PostForm);