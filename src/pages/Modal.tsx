import { modalStyles } from '../styles/modules/exports';

type ModalTypes = {
    classes: string;
    content: React.ReactNode;
};

const Modal = ({ classes, content }: ModalTypes) => {
    return (
        <div
            className={`${classes} ${modalStyles.center}`}
            style={{
                position: 'relative',
                top: 0,
                left: 0,
                zIndex: 1,
                width: '100vw',
                height: '100vh',
                overflow: 'hidden'
            }}
        >
            {content}
        </div>
    );
};

export default Modal;
