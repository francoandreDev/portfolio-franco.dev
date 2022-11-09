import { Link } from 'react-scroll';

type LinksType = {
    id: string;
};

const LinkSmooth = ({ id }: LinksType) => {
    return <Link to={id} smooth={true} duration={500} delay={5}></Link>;
};

export default LinkSmooth;
