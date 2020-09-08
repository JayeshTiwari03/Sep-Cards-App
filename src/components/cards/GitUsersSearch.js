import React, {useState, useEffect} from 'react'
import "./GitUsersSearch.scss"

function GitUsersSearch() {

    const [people, setPeople] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((data) => {
            setPeople(data)
            setLoading(true)
        },
        (error) => {
            setError(error)
            setLoading(true)
        })
    }, [])

    if(!loading) {
        return <p>Loading...</p>
    }
    else if (error) {
        return <p>Some error occurred</p>
    }
    else {
    return (
        <div>
            <h1>Results here</h1>
            {people.map(user => (
                <h1>{user.login}</h1>
            ))}
        </div>
    )}
}

export default GitUsersSearch
