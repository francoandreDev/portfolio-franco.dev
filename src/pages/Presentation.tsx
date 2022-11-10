import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Presentation = () => {
    const username = useSelector((state: RootState) => state.userName.value);
    return (
        <div>
            <p>
                Hello {username}, my name is Franco I'm a full-stack web
                developer focus in work with React.
            </p>
        </div>
    );
};

export default Presentation;
