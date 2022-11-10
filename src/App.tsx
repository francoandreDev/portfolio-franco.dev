import GetUserNameForm from './pages/GetUserNameForm';
import Modal from './components/Modal';
import Welcome from './pages/Welcome';

import { Home } from './pages/exports';
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
    const contentWelcome = (
        <>
            {username.length === 0 ? (
                <GetUserNameForm />
            ) : isTimePassed ? (
                <Home />
            ) : (
                <Welcome />
            )}
        </>
    );
    return (
        <div>
            <Modal classes={classes} content={contentWelcome} />
        </div>
    );
}

export default App;
