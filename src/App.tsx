import GetUserNameForm from './pages/GetUserNameForm';
import { Breaks, Home, Modal, Welcome } from './pages/exports';
import { RootState } from './store';
import { appStyles } from './styles/modules/exports';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
    const theme = useSelector((state: RootState) => state.themes.value);
    const classes = appStyles[`theme-${theme}`];
    const username = useSelector((state: RootState) => state.userName.value);
    const [isTimePassed, setIsTimePassed] = useState<boolean>(true);
    useEffect(() => {
        if (!username) {
            setIsTimePassed(false);
            return;
        }
        setTimeout(() => {
            setIsTimePassed(true);
        }, 2000);
    }, [username]);
    const contentModal = (
        <>
            {username.length === 0 ? (
                <>
                    <GetUserNameForm />
                    <Breaks show={true} />
                </>
            ) : !isTimePassed ? (
                <>
                    <Welcome />
                    <Breaks show={false} />
                </>
            ) : (
                <Home />
            )}
        </>
    );
    return <Modal classes={classes} content={contentModal} />;
}

export default App;
