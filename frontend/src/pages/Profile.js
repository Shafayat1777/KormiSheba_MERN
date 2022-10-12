import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import ProfileForm from '../components/ProfileForm'

const Profile = () => {

    const [data, setData] = useState(null)
    const { user } = useAuthContext()
    useEffect(() => {
        const fetchServices = async () => {
            const response = await fetch('http://localhost:4000/api/user/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if(response.ok){
                setData(json)
                // dispatch({type: 'SET_SERVICES', payload:json})
            }
        }

        if(user){
            fetchServices()
        }
    }, [user])

    return ( 
        <div>
            
            {data && <ProfileForm data={data} user={user}/>}
        </div>
     );
}
 
export default Profile;