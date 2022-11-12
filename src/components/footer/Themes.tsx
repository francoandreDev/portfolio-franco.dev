import { RootState } from '../../store';
import { changeTheme } from '../../store/slices/themes.slice';
import { useDispatch, useSelector } from 'react-redux';

const Themes = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.themes.value);

    const anotherTheme = (theme: string) => {
        return theme === 'dark' ? 'light' : 'dark';
    };

    const toggleThemes = () => {
        dispatch(changeTheme(anotherTheme(theme)));
    };

    return (
        <button
            onClick={() => {
                toggleThemes();
            }}
            style={{ border: '0px solid transparent' }}
        >
            Toggle Theme
        </button>
    );
};

export default Themes;
