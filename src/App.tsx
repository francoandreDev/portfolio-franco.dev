import GetUserNameForm from './pages/GetUserNameForm';
import Modal from './components/Modal';
import Welcome from './pages/Welcome';
import { RootState } from './store';
import { appStyles } from './styles/modules/exports';
import { useSelector } from 'react-redux';

function App() {
    const theme = useSelector((state: RootState) => state.themes.value);
    const classes = appStyles[`theme-${theme}`];
    const username = useSelector((state: RootState) => state.userName.value);
    const contentWelcome = (
        <>{username.length !== 0 ? <Welcome /> : <GetUserNameForm />}</>
    );
    return (
        <div>
            <Modal classes={classes} content={contentWelcome} />
        </div>
    );
}

export default App;
