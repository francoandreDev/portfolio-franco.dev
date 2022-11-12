import { Break } from '../components/exports';
import { colors } from '../utils/exports';
import { useState } from 'react';

type BreaksType = {
    show: boolean;
};

const Breaks = ({ show }: BreaksType) => {
    const [blueColor, brickColor, goldColor, greenColor, pinkColor] = colors;
    const timeMilliseconds = 10;
    const maxLength = 200;
    const minLength = 0;
    const [breaks, setBreaks] = useState<Array<string>>([]);

    if (breaks.length <= maxLength && breaks.length >= minLength) {
        if (show) {
            setTimeout(() => {
                setBreaks((allBreaks) => [...allBreaks, '']);
            }, timeMilliseconds);
        }
    }

    if (!show) {
        setTimeout(() => {
            setBreaks((prevBreaks) =>
                prevBreaks.filter(
                    (_oneBreak, index) => index < prevBreaks.length - 1
                )
            );
        }, timeMilliseconds);
    }

    return (
        <ul
            style={{
                position: 'absolute',
                top: '-2vh',
                left: '-4vw',
                zIndex: 0,
                width: '120vw',
                height: '120vh',
                backgroundColor: 'transparent',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr))',
                rotate: `${show ? '180deg' : '360deg'}`,
                gap: 0,
                borderRadius: '3px'
            }}
        >
            {breaks.map((_myBreak, index) => {
                return (
                    <li
                        key={index}
                        style={{
                            listStyle: 'none',
                            height: '55px'
                        }}
                    >
                        <Break
                            bgColor={
                                index % 5 === 0
                                    ? brickColor
                                    : index % 5 === 1
                                    ? goldColor
                                    : index % 5 === 2
                                    ? greenColor
                                    : index % 5 === 3
                                    ? blueColor
                                    : pinkColor
                            }
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default Breaks;
