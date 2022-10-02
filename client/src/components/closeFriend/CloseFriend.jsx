import "./closeFriend.css"

export default function CloseFriend({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div>
            <li className="leftbarFriend">
                <img src={PF+"/"+user.profilePicture} className="leftbarFriendImg" alt="" />
                <span className="leftbarFriendName">{user.username}</span>
            </li>
        </div>
    )
}