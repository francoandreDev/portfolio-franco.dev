import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Technologies from './Technologies';

type MySectionType = {
    id: string;
    title: string;
};

type PropsChooseComponentType = {
    content: string;
};

const MySection = ({ id, title }: MySectionType) => {
    function ChooseComponent({content}: PropsChooseComponentType) {
        switch (content) {
            case 'About Me':
                return <AboutMe />;
                break;
            case 'Projects':
                return <Projects />;
                break;
            case 'Technologies':
                return <Technologies />;
                break;
            case 'Contact Me':
                return <ContactMe />;
                break;
            default:
                return <ContactMe />;
        }
    }

    return (
        <div id={id}>
            <h2 style={{ fontSize: '2em' }}>{title}</h2>
            <ChooseComponent content={title}/>
        </div>
    );
};

export default MySection;
