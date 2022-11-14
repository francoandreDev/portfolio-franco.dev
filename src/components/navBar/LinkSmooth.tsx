import { Link } from 'react-scroll';
import { changeSection } from '../../store/slices/section.slice';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

type LinksType = {
    classLink: string;
    id: string;
    content: string;
};

const LinkSmooth = ({ classLink, id, content }: LinksType) => {
    const dispatch = useDispatch();
    const getNewId = (id: string) => {
        return id.replace('#', '');
    };
    const [newId, setNewId] = useState<string>(getNewId(id));
    useEffect(() => {
        setNewId(getNewId(id));
    }, [id]);
    return (
        <Link
            className={classLink}
            to={id}
            onClick={() => {
                dispatch(changeSection(newId));
            }}
        >
            {content}
        </Link>
    );
};

export default LinkSmooth;
