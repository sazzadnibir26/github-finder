import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItems from './UserItems'
import GithubContext from '../../context/github/githubContext'
import PropTypes from 'prop-types'

const Users = () => {
    const githubContext = useContext(GithubContext)

    const { loading, users } = githubContext


    if (loading) return <Spinner />

    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserItems key={user.id} user={user} />
            ))}
        </div>
    )
}

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem"
}

Users.propTypes = {
    users: PropTypes.array,
    loading: PropTypes.bool
}

export default Users