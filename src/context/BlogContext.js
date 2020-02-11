import createDataContext from './createDataContext'
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'edit_blogPost':
            return state.map(post => {
                if (post.id === action.payload.id) {
                    return action.payload
                }
                else {
                    return post
                }
            })
        case 'deletePost':
            return state.filter((post) => (post.id !== action.id))
        default:
            return state;
    }
}
const addPosts = (dispatch) => {
    return (title, content, cb) => {
        dispatch({ type: 'add_blogPost', payload: { title, content } })
        cb();
    }
}
const editPost = (dispatch) => {
    return (id, title, content, cb) => {
        dispatch({ type: 'edit_blogPost', payload: { id, title, content } })
        cb();
    }
}
const deletePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deletePost', id })
    }
}
export const { Context, Provider } = createDataContext(blogReducer, { addPosts, deletePost, editPost }, [{ title: "test", content: "test content", id: 1 }])
