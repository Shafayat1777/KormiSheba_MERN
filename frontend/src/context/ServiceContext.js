import { createContext, useReducer } from 'react'

export const ServiceContext = createContext()

export const serviceReducer = (state, action) => {
    switch(action.type){
        case 'SET_SERVICES':
            return {
                services: action.payload
            }
        case 'CREATE_SERVICE':
            return {
                services: [action.payload, ...state.services]
            }
        case 'DELETE_SERVICE':
            return{
                services: state.services.filter((s) => s._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ServiceContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(serviceReducer, {
        services: null
    })
    
    return ( 
        <ServiceContext.Provider value={{...state, dispatch}}>
            { children }
        </ServiceContext.Provider>
     );
}
 