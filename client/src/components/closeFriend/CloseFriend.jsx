import "./closeFriend.css"

export default function CloseFriend({user}) {
    return (
        <div>
            <li className="leftbarFriend">
                <img src={user.profilePicture} className="leftbarFriendImg" alt="" />
                <span className="leftbarFriendName">{user.username}</span>
            </li>
        </div>
    )
}