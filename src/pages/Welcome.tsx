import { RootState } from '../store';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const username = useSelector((state: RootState) => state.userName.value);
    return (
        <div>
            <h2>Welcome {username}</h2>
        </div>
    );
};

export default Welcome;
