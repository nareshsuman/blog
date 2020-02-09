import createDataContext from './createDataContext'
const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, {
                id: Math.floor(Math.random() * 9999),
                title: `post #${state.length + 1}`
            }];
        case 'deletePost':
            return state.filter((post)=>(post.id!==action.id))
        default:
            return state;
    }
}
const addPosts = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogPost' })
    }
}
const deletePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deletePost', id })
    }
}
export const { Context, Provider } = createDataContext(blogReducer, { addPosts, deletePost }, [])
