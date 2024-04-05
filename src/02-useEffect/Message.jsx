import { useEffect } from 'react';

export const Message = () => {
    useEffect(() => {
     
     
        const onMouseMove = ({x,y}) => {
            const coordendas = { x, y };
            console.log(coordendas);
        };

        window.addEventListener('mousemove', onMouseMove);
        // console.log('Message Mounted');

        return () => {
             window.removeEventListener('mousemove', onMouseMove);
            
        };
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            <hr />
        </>
    );
};
