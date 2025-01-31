import { useForm } from '../hooks/UseForm';

export const FormWithCustomHook = () => {
    const { formState, onInputChange,onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });
    // const { username, email, password } = formState;

    return (
        <>
            <h1>Formulario con sutom hook</h1>
            <hr />
            <input
                type='text'
                className='form-control'
                placeholder='User name'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input
                type='email'
                className='form-control mt-2'
                placeholder='tu@email.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input
                type='password'
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={password}
                onChange={onInputChange}
            />
            <button onClick={onResetForm} className='btn btn-primary mt-2'>
                Borrar
            </button>
        </>
    );
};
