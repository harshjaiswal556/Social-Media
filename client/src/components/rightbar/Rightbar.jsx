import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
export default function Rightbar({ profile }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assests/heart.png" className="birthdayImg" height="30px" alt="" />
                    <span className="birthdayText"> <b>Harsh</b> and 3 other friends have birthday today. </span>
                </div>
                <img src="assests/like.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => {
                        return <Online key={u.id} user={u} />
                    })}
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Info Title</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Mumbai</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Katni</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship: </span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assests/person/mypic.png" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Harsh Jaiswal</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assests/person/mypic.png" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Harsh Jaiswal</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assests/person/mypic.png" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Harsh Jaiswal</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assests/person/mypic.png" className="rightbarFollowingImg" alt="" />
                        <span className="rightbarFollowingName">Harsh Jaiswal</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightBar/>}
            </div>
        </div>
    )
}