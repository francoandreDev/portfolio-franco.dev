import { useSelector } from "react-redux";
import { profileStyles } from "../../styles/modules/exports";
import { RootState } from "../../store";
import profileImage1 from "../../assets/profile-photo.png";
import profileImage2 from "../../assets/profile-photo-2.png";
import "../../styles/utils.css";

const Profile = () => {
    const theme = useSelector((state:RootState)=>state.themes.value)
    return (
        <div className={`${profileStyles["profile-container"]} borders`} style={{
            boxShadow: `0 0 2px 4px var(--color-${theme})`
        }}>
            <div className={`${profileStyles["line-bright"]}`}></div>
            <img className={profileStyles["profile-image"]} id={`${profileStyles["profile-image-1"]}`} src={profileImage1} alt="profile-image-1" />
            <img className = {profileStyles["profile-image"]} id={`${profileStyles["profile-image-2"]}`} src={profileImage2} alt="profile-image-2" />
        </div>
    );
};

export default Profile;