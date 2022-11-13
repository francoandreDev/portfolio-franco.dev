import { profileStyles } from "../../styles/modules/exports";
import profileImage from "../../assets/profile-photo.png";
import "../../styles/utils.css";

const Profile = () => {
    return (
        <div className={`${profileStyles["profile-container"]} borders`}>
            <img className={profileStyles["profile-image"]} src={profileImage} alt="profile-image" />
        </div>
    );
};

export default Profile;