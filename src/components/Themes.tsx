import { changeTheme } from '../store/slices/themes.slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

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
            style={{
                backgroundColor: `var(--theme-${theme})`,
                color: `var(--color-${theme})`,
                border: `1px solid var(--color-${theme})`
            }}
        >
            Toggle Theme
        </button>
    );
};

export default Themes;
