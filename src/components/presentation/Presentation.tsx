import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Presentation = () => {
    const username = useSelector((state: RootState) => state.userName.value);
    const theme = useSelector((state: RootState) => state.themes.value);

    return (
        <div
            style={{
                gridArea: 'presentation',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                border: `1px solid var(--color-${theme})`,
                borderLeft: '0 solid transparent'
            }}
        >
            <p>
                Hello {username}, my name is Franco I'm a full-stack web
                developer focus in work with React.
            </p>
        </div>
    );
};

export default Presentation;
