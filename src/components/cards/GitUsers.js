import React, {useState, useEffect} from 'react'
import './GitUsers.css'

const GitUsers = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(response => {
            user: user.response
        }, [])
    }

    return (
        <div className='container'>
            <div className='cards-column'>
                <p>this place will display results</p>
            </div>
        </div>
    )
}

export default GitUsers