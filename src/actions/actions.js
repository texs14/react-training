const login = () => {
    return {
        type: 'LOGIN',
        isAutorisation: true
    };
};

const logout = () => {
    localStorage.setItem('isAutorisation', false);

    return {
        type: 'LOGOUT',
        isAutorisation: false
    };
};

const addPost = (newPost) => {
    return {
        type: 'ADD_POST',
        payload: newPost,
    };
};

const deletePost = (id) => {
    const conf = window.confirm('Вы действительно хотите удалить пост?');

    if (conf) {
        return {
            type: 'DELETE_POST',
            payload: id
        };
    } else {
        return {
            type: 'DELETE_POST'
        };
    }

    
};

const openEditPost = (id) => {
    return {
        type: 'OPEN_EDIT_POST',
        payload: id
    };
};

const editPost = ({ title, imageUrl, id, paragraph }) => {
    const conf = window.confirm('Вы действительно хотите изменить пост?');

    if (conf) {
        return {
            type: 'EDIT_POST',
            payload: {
                title,
                imageUrl,
                id,
                paragraph
            }
        }
    } else {
        return {
            type: 'NOTHING'
        }
    }
}

const closeEdit = (post) => {
    const conf = window.confirm('Вы действительно хотите закрыть редактирование?');

    if(conf) {
        return {
            type: 'CLOSE_EDIT',
            payload: {
                ...post,
                edit: false
            }
        }
    } else {
        return { type: 'NOTHING' }
    } 

    
}

export {
    login,
    logout,
    addPost,
    editPost,
    closeEdit,
    deletePost,
    openEditPost,
};