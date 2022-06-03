import { useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import Repos from '../repos/Repos'
import Spinner from '../layout/Spinner'
import GithubContext from '../../context/github/githubContext'
import PropTypes from 'prop-types'

const User = () => {
    const params = useParams()
    const githubContext = useContext(GithubContext)

    const { getUser, loading, user, repos, getUserRepos } = githubContext

    useEffect(() => {
        getUser(params.login)
        getUserRepos(params.login)
        // eslint-disable-next-line
    }, [])

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        company,
        hireable
    } = user

    if (loading) return <Spinner />

    return (
        <>
            <Link to="/" className="btn btn-light">Back To Search</Link>

            Hireable: {' '}
            {hireable ? (
                <i className="fas fa-check text-success"></i>
            ) : (
                <i className="fas fa-times-circle text-danger"></i>
            )}

            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        className="round-img"
                        style={{ width: "150px" }}
                        alt={name}
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>

                <div>
                    {bio && (
                        <>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </>
                    )}

                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>

                    <ul>
                        <li>
                            {login && (
                                <>
                                    <strong>Username: </strong> {login}
                                </>
                            )}
                        </li>
                        <li>
                            {company && (
                                <>
                                    <strong>Company: </strong> {company}
                                </>
                            )}
                        </li>
                        <li>
                            {blog && (
                                <>
                                    <strong>Website: </strong> {blog}
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {followers}</div>
                <div className="badge badge-success">Followers: {followers}</div>
                <div className="badge badge-danger">Following: {following}</div>
                <div className="badge badge-light">Public Repos: {public_repos}</div>
                <div className="badge badge-dark">Public Gists: {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </>
    )
}

User.propTypes = {
    getUser: PropTypes.object,
    loading: PropTypes.bool,
    user: PropTypes.array,
    repos: PropTypes.object,
    getUserRepos: PropTypes.func
}

export default User
