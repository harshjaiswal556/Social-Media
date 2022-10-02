import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assests/person/mypic.png" alt="" className="shareProfileImg"/>
                    <input placeholder="What's in your mind???" type="text" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon htmlColor="grey" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <RoomIcon htmlColor="red" className="shareIcon"/>
                            <span className="shareOptionText">Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor="yellow" className="shareIcon"/>
                            <span className="shareOptionText">Emoji</span>
                        </div>
                    </div>
                    <div className="shareButton">Share</div>
                </div>
            </div>
        </div>
    )
}