import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    // bounties from the backend
    const [bounties, setBounties] = useState([])
    // state for messages from the backend
    const [errorMessage, setErrorMessage] = useState('')

    console.log('server url', process.env.REACT_APP_SERVER_URL)
    useEffect(() => {
        const getBounties = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/bounty`)
                // console.log(response.data)
                // TODO: sort by date and only show the most recent bounties
                setBounties(response.data)
            } catch(err) {
                console.warn(err)
                if (err.response) {
                    setErrorMessage(err.response.data.message)
                }
            }
        }
        getBounties()
    }, [])

    const bountyLinks = bounties.map(bounty => {
        return (
            <div key={bounty._id}>
                <Link to={`/bounties/${bounty._id}`}>
                    {bounty.name}
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Welcome to the Bounty App! 🔫</h1>

            <h2>Most Recent Bounties:</h2>

            {bountyLinks}
            {/* most reccent TODO: sort by date */}

            <p>{errorMessage}</p>
        </div>
    )
}