import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import User from './components/users/User'
import NotFound from './components/pages/NotFound'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <Navbar />

                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/*' element={<NotFound />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/user/:login' element={<User />} />
                        </Routes>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    )
}

export default App
