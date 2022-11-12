import LinkSmooth from './LinkSmooth';
import { RootState } from '../../store';
import { links } from '../../utils/exports';
import { navBarStyles } from '../../styles/modules/exports';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const theme = useSelector((state: RootState) => state.themes.value);

    return (
        <div
            style={{
                gridArea: 'navbar',
                borderBottom: `1px solid var(--color-${theme})`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <nav className={navBarStyles.nav}>
                <ul className={navBarStyles.layout}>
                    {links.map((link, index) => {
                        return (
                            <li
                                className={navBarStyles['list-style']}
                                key={index}
                            >
                                <LinkSmooth
                                    classLink={navBarStyles['link-style']}
                                    id={link[0]}
                                    content={link[1]}
                                />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
