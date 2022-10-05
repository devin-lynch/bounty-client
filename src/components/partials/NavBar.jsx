import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <ul style={{ listStyleType: 'none' }}>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/bounties'>All Bounties</Link>    
                </li>
                <li>
                    <Link to='/bounties/new'>Create Bounty</Link>    
                </li>
            </ul>
        </nav>
    )
}