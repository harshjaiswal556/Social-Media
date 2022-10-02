import "./online.css"

export default function Online({user}) {
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    )
}