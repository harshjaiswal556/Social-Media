import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {Link} from "react-router-dom"
export default function Topbar(){
    return(
        <div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to={"/"} style={{textDecoration:"none"}}>
                    <span className="logo">ReactSocial</span>
                    </Link>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <SearchIcon className="searchIcon"/>
                        <input type="text" placeholder="Search for friends, posts or any videos" className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">HomePage</span>
                        <span className="topbarLink">TimeLine</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <PersonIcon/> 
                            <span className="topbarIconBadge">
                                1
                            </span>
                        </div>
                        <div className="topbarIconItem">
                            <ChatIcon/>
                            <span className="topbarIconBadge">
                                1
                            </span>
                        </div>
                        <div className="topbarIconItem">
                            <NotificationsActiveIcon/>
                            <span className="topbarIconBadge">
                                1
                            </span>
                        </div>
                    </div>
                </div>
                <img src="/assests/person/mypic.png" alt="" className="topbarImg" />
            </div>
        </div>
    )
}