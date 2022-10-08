import { useAuthContext } from './useAuthContext'
import { useServiceContext } from './useServiceContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: serviceDispatch } = useServiceContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})

        // dispatch service
        serviceDispatch({type: 'SET_SERVICES', payload: null})
    }

    return {logout}
}