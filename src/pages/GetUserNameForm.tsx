import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { changeUserName } from '../store/slices/userName.slice';
import { useDispatch } from 'react-redux';

const GetUserNameForm = () => {
    const dispatch = useDispatch();

    const sendName = (name: string) => {
        dispatch(changeUserName(name));
    };

    const regIsValidUserName = /^[a-z0-9_-]{3,16}$/;

    const isValidUserName = (name: string) => {
        return regIsValidUserName.test(name);
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

        sendName(name);
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

    return (
        <form onSubmit={(e) => submit(e)}>
            <input
                type="text"
                placeholder="Write your username here!"
                value={name}
                onChange={handleChangeOnNameInput}
            />
            <p>{messageError}</p>
        </form>
    );
};

export default GetUserNameForm;
