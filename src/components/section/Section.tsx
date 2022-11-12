import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Technologies from './Technologies';

const Section = () => {
    const theme = useSelector((state: RootState) => state.themes.value);
    const section = useSelector((state: RootState) => state.section.value);

    return (
        <div
            style={{
                gridArea: 'section',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: `1px solid var(--color-${theme})`,
                borderRight: '0 solid transparent'
            }}
        >
            {section === 'aboutMe' ? (
                <AboutMe />
            ) : section === 'projects' ? (
                <Projects />
            ) : section === 'technologies' ? (
                <Technologies />
            ) : (
                section === 'contactMe' && <ContactMe />
            )}
        </div>
    );
};

export default Section;
