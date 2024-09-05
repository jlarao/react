import { useEffect, useState } from "react"

export const Message = () => {

    const [ cords, setCords ] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const onMouseMove = (event) => {
            // console.log(event.x, event.y);
            setCords({ x: event.x, y: event.y });
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            // console.log('Message unmounted');
            window.removeEventListener('mousemove', onMouseMove);
        }
    })
    return (
        <div>
            Usuario ya existe
            {JSON.stringify(cords)}
        </div>
    )
}