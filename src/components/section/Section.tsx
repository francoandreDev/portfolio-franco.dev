
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import MySection from './MySection';

const Section = () => {
    const theme = useSelector((state: RootState) => state.themes.value);
    const sectionId = useSelector((state: RootState) => state.section.id);
    const sectionTitle = useSelector((state: RootState) => state.section.title);

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
            <MySection
                id={sectionId}
                title={sectionTitle}
            />
        </div>
    );
};

export default Section;
