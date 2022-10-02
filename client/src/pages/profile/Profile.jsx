import Feed from "../../components/feed/Feed"
import Leftbar from "../../components/leftbar/Leftbar"
import Rightbar from "../../components/rightbar/Rightbar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"

export default function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="assests/post/pic3.png" className="profileCoverImg" alt="" />
                            <img src="assests/person/mypic.png" className="profileUserImg" alt="" />
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Harsh Jaiswal</h4>
                                <p className="profileInfoDesc">This is description</p>
                            </div>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}