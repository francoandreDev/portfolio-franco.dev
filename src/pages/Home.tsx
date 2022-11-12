import { Footer, NavBar, Presentation, Section } from '../components/exports';
import { homeStyles } from '../styles/modules/exports';

const Home = () => {
    return (
        <main className={`${homeStyles['grid-main']}`}>
            <NavBar />
            <Presentation />
            <Section />
            <Footer />
        </main>
    );
};

export default Home;
