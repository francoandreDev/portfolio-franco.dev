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
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh'
            }}
        >
            {content}
        </div>
    );
};

export default Modal;
