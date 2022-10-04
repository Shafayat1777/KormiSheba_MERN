import { useEffect } from 'react'
import { useServiceContext } from '../hooks/useServiceContext'

// components
import ServiceList from '../components/ServiceList'
import ServiceForm from '../components/ServiceForm'


const Home = () => {
    // const [services, setServices] = useState(null)
    const {services, dispatch} = useServiceContext()
    
    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('/api/services')
            const json = await response.json()

            if(response.ok){
                // setServices(json)
                dispatch({type: 'SET_SERVICES', payload:json})
            }
        }
        fetchServices()
    }, [dispatch])

    return ( 
        <div className="home">
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
 
export default Home;