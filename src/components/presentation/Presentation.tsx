import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { presentationStyles } from '../../styles/modules/exports';
import Profile from './Profile';

const Presentation = () => {
    const username = useSelector((state: RootState) => state.userName.value);
    const theme = useSelector((state: RootState) => state.themes.value);

    return (
        <div
            style={{
                gridArea: "presentation",
                border: `1px solid var(--color-${theme})`,
                borderLeft: '0 solid transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: "100%"
            }}
        >
            <section
                className={`${presentationStyles.presentation}`}
            >
                <Profile />
                <article
                    style={{
                        gridArea: 'text',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',

                    }}
                >
                    <p style={{ fontSize: '2em', margin: "12px 0" }}>
                        Hello {username}, my name is Franco I'm a full-stack web
                        developer focus in work with React.
                    </p>
                    <p style={{ fontSize: '1.8em', margin: "12px 0" }}>
                        Hello {username}, my name is Franco I'm a full-stack web
                        developer focus in work with React.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Presentation;
