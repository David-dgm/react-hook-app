import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'david@google.com',
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const{name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }        ;


useEffect(()=>{
    // console.log("useeffect on");

},[]);
useEffect(() => {
    // console.log('Form state changed');
}, [formState]);

useEffect(() => {
    // console.log('Email changed');
}, [email]);





    return (
        <>
            <h1>Formulario simple</h1>
            <hr />
            <input
                type='text'
                className='form-control'
                placeholder={username}
                name='username'
                onChange={onInputChange}
            />
            <input
                type='email'
                className='form-control mt-2'
                placeholder={email}
                name='email'
                onChange={onInputChange}
            />
            

            {
                (username==='strider2') && (<Message/>)
            }
        </>
    );
};
