import { ReactNode } from 'react';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Technologies from './Technologies';

type MySectionType = {
    id: string;
    title: ReactNode;
};

const MySection = ({ id, title }: MySectionType) => {
    return (
        <div id={id}>
            <h2 style={{ fontSize: '2em' }}>{title}</h2>
            {title === 'About Me' ? (
                <AboutMe />
            ) : title === 'Projects' ? (
                <Projects />
            ) : title === 'Technologies' ? (
                <Technologies />
            ) : title === 'Contact Me' ? (
                <ContactMe />
            ) : null}
        </div>
    );
};

export default MySection;
