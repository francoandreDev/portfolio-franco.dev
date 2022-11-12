type BreakType = {
    bgColor: string;
};

const Break = ({ bgColor }: BreakType) => {
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                boxShadow: `inset 0 0 5px 1px ${bgColor}`,
                border: `1px solid ${bgColor}`
            }}
        ></div>
    );
};

export default Break;
