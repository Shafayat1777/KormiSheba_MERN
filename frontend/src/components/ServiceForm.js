import {useState} from "react"
import { useServiceContext } from '../hooks/useServiceContext'
import { useAuthContext } from '../hooks/useAuthContext'

const ServiceForm = () => {
    const { dispatch } = useServiceContext()
    const [title, setTitle] = useState('')
    const [main_description, setMain_description] = useState('')
    const [price, setPrice] = useState('')
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    
    const handelSubmit = async (e) => {
        e.preventDefault()

        if(!user){
            setError('You must be logged in')
            return
        }

        const service = {title, main_description, price}

        const response = await fetch('http://localhost:4000/api/services', {
            method: 'POST',
            body: JSON.stringify(service),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log('new service added', json)
            setTitle('')
            setMain_description('')
            setPrice('')
            dispatch({type: 'CREATE_SERVICE', payload: json})
        }
    }

    return ( 
        <form className="createService" onSubmit={handelSubmit}>
            <h3>Add a new Service</h3>

            <label>Service Title</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
             />

            <label>Main Description</label>
            <textarea type="text"
                onChange={(e) => setMain_description(e.target.value)}
                value={main_description}></textarea>
        
            <label>Service Price</label>
            <input 
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
             />

             <button>Add Service</button>
             {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default ServiceForm;