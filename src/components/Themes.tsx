import { useState } from 'react';

const [theme, setTheme] = useState('dark');
const toggleThemes = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
};

const Themes = () => {
    return (
        <button
            onClick={() => {
                toggleThemes();
            }}
        >
            Toggle Theme
        </button>
    );
};

export default Themes;
