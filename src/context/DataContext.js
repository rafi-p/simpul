import { createContext, useReducer } from 'react'

export const DataContext = createContext()

export const dataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_TOGGLE':
            return {
                ...state,
                activeToggle: action.payload
            }
        default:
            return state
    }
}


export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, {
        activeToggle: ''
    })

    return (
        <DataContext.Provider value={{...state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}
