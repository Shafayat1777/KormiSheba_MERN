import { useServiceContext } from '../hooks/useServiceContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ServiceList = ({ service }) => {
    const { dispatch } = useServiceContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/services/' + service._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_SERVICE', payload: json})
        }else{
            console.log(json)
        }
    }
    
    return ( 
        <div className="serviceList">
             <hr /> 
            <h4><strong>Title: </strong>{service.title}</h4>
            <p><strong>Description: </strong>{service.main_description}</p>
            <p><strong>Price: </strong>{service.price} Tk</p>
            <p><strong>Created at: </strong>{formatDistanceToNow(new Date(service.createdAt), { addSuffix: true})} </p>
            <span onClick={handleClick}> delete </span>
        </div>
     );
}
 
export default ServiceList;