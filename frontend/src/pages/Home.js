import { useEffect, useState } from 'react'

// components
import ServiceList from '../components/ServiceList'
import ServiceForm from '../components/ServiceForm'


const Home = () => {
    const [services, setServices] = useState(null)

    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('/api/services')
            const json = await response.json()

            if(response.ok){
                setServices(json)
            }
        }
        fetchServices()
    }, [])

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