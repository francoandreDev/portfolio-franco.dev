import Themes from './Themes';
import { RootState } from '../../store';
import { footerStyles } from '../../styles/modules/exports';
import { useSelector } from 'react-redux';

const Footer = () => {
    const theme = useSelector((state: RootState) => state.themes.value);
    return (
        <footer
            className={footerStyles.footer}
            style={{
                gridArea: 'footer',
                borderTop: `1px solid var(--color-${theme})`
            }}
        >
            <Themes />
            <span>Franco.dev (last update 2022/11/11)</span>
            <Themes />
        </footer>
    );
};

export default Footer;
