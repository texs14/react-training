
const initialState = {
    isAutorisation: localStorage.getItem('isAutorisation') ? JSON.parse(localStorage.getItem('isAutorisation')) : false,
    posts: [
        {
            title: 'abc',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/70729/ac268b58-cff9-448c-853b-13660ee8301c/s1200',
            paragraph: 'exemple text',
            id: 'asd',
            edit: true,
        },
        {
            title: 'abc2',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/1220164/7a4ccfa5-d1c3-41f6-b402-b19097f57ee6/s1200',
            paragraph: 'exemple text2',
            id: 'asdsdadfdsa' ,
            edit: false,
        },
        {
            title: 'abc',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/70729/ac268b58-cff9-448c-853b-13660ee8301c/s1200',
            paragraph: 'exemple text',
            id: 'fasfsa',
            edit: false,
        },
        {
            title: 'abc2',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/1220164/7a4ccfa5-d1c3-41f6-b402-b19097f57ee6/s1200',
            paragraph: 'exemple text2',
            id: 'asdddsadwsa' ,
            edit: false,
        },
        {
            title: 'abc',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/70729/ac268b58-cff9-448c-853b-13660ee8301c/s1200',
            paragraph: 'exemple text',
            id: 'asqweqfad',
            edit: false,
        },
        {
            title: 'abc2',
            imageUrl: 'https://avatars.mds.yandex.net/get-pdb/1220164/7a4ccfa5-d1c3-41f6-b402-b19097f57ee6/s1200',
            paragraph: 'exemple text2',
            id: 'asdvxczvsdadsa' ,
            edit: false,
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('isAutorisation', true);

            return {
                ...state,
                isAutorisation: true
            };
        
        case 'LOGOUT':
            return {
                ...state,
                isAutorisation: false
            };
        
        case 'ADD_POST':
            return {
                ...state,
                posts: [
                    action.payload,
                    ...state.posts,
                ]
            };

        case 'DELETE_POST':
            let id = action.payload;

            return {
                ...state,
                posts: state.posts.filter( post => post.id !== id)
            }

        case 'OPEN_EDIT_POST':
            return {
                ...state,
                posts: state.posts.map( post => (post.id === action.payload) ? 
                {
                    ...post,
                    edit: true
                } :
                post)
            }
        
        case 'EDIT_POST':

            console.log(action.payload);
            return {
                ...state,
                posts: state.posts.map( post => (post.id === action.payload.id) ?
                    action.payload :
                    post)
            }

        case 'CLOSE_EDIT':
            return {
                ...state,
                posts: state.posts.map( post => (post.id === action.payload.id) ?
                    action.payload :
                    post)
            }
        default:
            return state;
    }
}


export default reducer;