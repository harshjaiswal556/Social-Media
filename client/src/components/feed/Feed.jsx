import "./feed.css"
import Share from "../share/Share"
import Post from "../post/Post"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
export default function Feed({username}) {
    console.log("Feed")
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetch = async()=>{
            const res = username ? await axios.get("/api/posts/profile/"+username) : await axios.get("/api/posts/timeline/632a9ae336fac40fdbf3e3a2")
            setPosts(res.data)
            console.log(res.data)
        }
        fetch();
    },[username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => {
                    return <Post key={p.id} post={p} />
                })}
            </div>
        </div>
    )
}