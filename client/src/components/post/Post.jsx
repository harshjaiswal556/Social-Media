import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import {format} from "timeago.js";
import {Link} from "react-router-dom";

export default function Post({post}){
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(()=>{
        const fetchUser = async()=>{
            const res = await axios.get("/api/users/"+post.userId)
            setUser(res.data)
        }
        fetchUser();
    },[post.userId])
    const likeHandler=()=>{
        setLike(isLiked?like-1:like+1);
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                        <img src={user.profilePicture || PF+"/person/nopic.png"} alt="" className="postProfileImg"/>
                        </Link>
                        <span className="postUsername">{user.username} </span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post.desc}</div>
                    <img className="postImg" onDoubleClick={likeHandler} src={PF+"/"+post.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={PF+"/like.png"} onClick={likeHandler} alt="" height="30px" />
                        <span className="postLikeCounter">{like} people liked it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}