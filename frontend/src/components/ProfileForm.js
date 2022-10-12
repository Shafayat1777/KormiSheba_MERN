import {useState} from "react"

const ProfileForm = ({data, user}) => {
    // const { name:dname, email:demail, about_me:dabout_me } = useProfile()
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)
    const [about_me, setAbout_me] = useState(data.about_me)
    const [error, setError] = useState(null)
    // const [avatar, setAvatar] = useState('')

    const handleClick = async (e) => {
        e.preventDefault()

        const userData = {name, email, about_me}

        const response = await fetch('http://localhost:4000/api/user/update', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log('Profile updated', json)
            // setTitle('')
            // setMain_description('')
            // setPrice('')
            // dispatch({type: 'CREATE_SERVICE', payload: json})
        }
    }

    return ( 
        <div>
            <form onSubmit={handleClick}>
                <label>Name:</label>
                <input 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                
                <label>Email:</label>
                <input 
                    type="email"
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                />

                <label>About me:</label>
                <input 
                    type="text"
                    onChange={(e) => {setAbout_me(e.target.value)}}
                    value={about_me}
                />

                <button>Save</button>

                {error && <div className="error">{error}</div>}
            </form>
        </div>
     );
}
 
export default ProfileForm;