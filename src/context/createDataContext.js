import React, { useReducer } from 'react'


export default (Reducer, actions, intialState) => {

    const Context = React.createContext()

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(Reducer, intialState)
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>
    }
    return { Context, Provider }
}