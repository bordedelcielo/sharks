import { useState } from 'react'
import Post from './Post'

export default function PostList() {
    const [posts, setPosts] = useState([
        {
            id: 0,
            title: "Test Post",
            text: "This is text"
        },
        {
            id: 1,
            title: "Test Post 2",
            text: "This is text again"
        },
        {
            id: 2,
            title: "Test Post 3",
            text: "This is text again, again"
        },    
    ])

    return (
        <>
            {
                posts.map((post, index) => <Post post={post} key={ post.id } />)
            }
        </>
    )
}