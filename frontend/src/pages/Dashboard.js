import { useEffect } from 'react'
import { useServiceContext } from '../hooks/useServiceContext'
import { useAuthContext } from '../hooks/useAuthContext'

// components
import ServiceList from '../components/ServiceList'
import ServiceForm from '../components/ServiceForm'


const Dashboard = () => {
    // const [services, setServices] = useState(null)
    const {services, dispatch} = useServiceContext()
    const { user } = useAuthContext()

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('http://localhost:4000/api/services', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                // setServices(json)
                dispatch({type: 'SET_SERVICES', payload:json})
            }
        }

        if(user){
            fetchServices()
        }
    }, [dispatch, user])

    return ( 
        <div className="Dashboard">
             <ServiceForm/>
             <br /><br />
            <div className="services">
                {services && services.map((service) => (
                    <ServiceList key={service._id} service={service}/>
                ))}
            </div>
        </div>
     );
}
 
export default Dashboard;