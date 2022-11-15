import { useSelector } from "react-redux";
import { profileStyles } from "../../styles/modules/exports";
import { RootState } from "../../store";
import "../../styles/utils.css";

const Profile = () => {
    const theme = useSelector((state:RootState)=>state.themes.value)
    return (
        <div className={`${profileStyles["profile-container"]} borders`} style={{
            boxShadow: `0 0 2px 4px var(--color-${theme})`
        }}>
            <img className={profileStyles["profile-image"]} id={`${profileStyles["profile-image-1"]}`} alt="profile image 1" />
            <img className = {profileStyles["profile-image"]} id={`${profileStyles["profile-image-2"]}`} alt="profile image 2" />
        </div>
    );
};

export default Profile;