import "./online.css"

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const x= PF;
    console.log(x)
    return (
        <div>
            <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                    <img src={PF+"/"+user.profilePicture} alt="" className="rightbarProfileImg" />
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    )
}