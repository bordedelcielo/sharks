import { useState } from 'react'
import PostList from './components/PostList'
import Home from './views/Home'
import Blog from './views/Blog'
import Contact from './views/Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function App() {

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/contact" element={ <Contact />}></Route>
                </Routes>
            </Router>
        </>
    )
}