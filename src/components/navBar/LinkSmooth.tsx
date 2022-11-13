import { Link } from 'react-scroll';
import { changeSection } from '../../store/slices/section.slice';
import { useDispatch } from 'react-redux';

type LinksType = {
    classLink: string;
    id: string;
    content: string;
};

const LinkSmooth = ({ classLink, id, content }: LinksType) => {
    const dispatch = useDispatch()

    return (
        <Link
            className={classLink}
            to={id}
            smooth={true}
            duration={500}
            delay={5}
            onClick={()=>{dispatch(changeSection(id))}}
        >
            {content}
        </Link>
    );
};

export default LinkSmooth;
