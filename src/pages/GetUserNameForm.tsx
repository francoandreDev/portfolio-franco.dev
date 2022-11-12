import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { changeUserName } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';

const GetUserNameForm = () => {
    const dispatch = useDispatch();

    const sendName = (name: string) => {
        dispatch(changeUserName(name));
    };

    const regIsValidUserName = /^[a-z0-9_-]{3,16}$/;
    const regIsName = /^[a-z]{3,16}$/;

    const isValidUserName = (name: string) => {
        return regIsValidUserName.test(name);
    };

    const formatName = (name: string) => {
        if (regIsName.test(name))
            return name.slice(0, 1).toUpperCase() + name.slice(1, name.length);
        return name;
    };

    const submit = (e: FormEvent): void => {
        e.preventDefault();
        sendName('');
        //Those cases are handle in the useEffect hook
        if (
            name.search(' ') !== -1 ||
            name.length <= 2 ||
            !isValidUserName(name)
        ) {
            return;
        }
        const fName = formatName(name);
        sendName(fName);
        setName('');
        return;
    };

    const handleChangeOnNameInput = (
        e: ChangeEvent<HTMLInputElement>
    ): void => {
        setName(e.target.value);
    };

    const [name, setName] = useState<string>('');
    const [messageError, setMessageError] = useState<string>('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (name.length === 0) return;
        if (name.length <= 2) {
            setMessageError('the username is not length enough');
            return;
        }
        if (name.search(' ') !== -1 || !isValidUserName(name)) {
            setMessageError('The username is not valid');
            return;
        }
        setMessageError('');
    }, [name]);

    useEffect(() => {
        inputRef.current?.focus();
    }, [inputRef.current?.focus]);

    return (
        <form
            onSubmit={(e) => submit(e)}
            style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <input
                type="text"
                placeholder="Write your username here!"
                value={name}
                onChange={handleChangeOnNameInput}
                ref={inputRef}
                style={{
                    backgroundColor: 'transparent',
                    boxShadow: '0 0 5px 1px gray',
                    color: `${'dark' === 'dark' ? 'white' : 'black'}`,
                    textAlign: 'center'
                }}
            />
            <p style={{ color: '#ff004c', backgroundColor: "transparent" }}>{messageError}</p>
        </form>
    );
};

export default GetUserNameForm;
