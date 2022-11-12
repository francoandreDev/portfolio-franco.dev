import { RootState } from '../store';
import { useSelector } from 'react-redux';

const Welcome = () => {
    const username = useSelector((state: RootState) => state.userName.value);

    return (
        <div
            style={{
                position: 'relative',
                zIndex: 1,
                backgroundColor: 'transparent'
            }}
        >
            <h2 style={{ backgroundColor: 'transparent' }}>
                Welcome {username}
            </h2>
        </div>
    );
};

export default Welcome;
