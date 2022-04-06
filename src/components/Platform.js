import React from 'react';
import { FaPlaystation, FaXbox, FaLaptop, FaApple, FaGamepad } from 'react-icons/fa';
import { SiNintendoswitch } from 'react-icons/si'


export default function Platform({ id }) {
    let plat = null;

    switch (id) {
        case 1:
        case 186:
            plat = <FaXbox size={30} />;
            break
        case 18:
        case 187:
            plat = <FaPlaystation size={30} />;
            break;
        default:
            plat = <FaLaptop size={30} />

    }

    return (
        <>
            {plat}
        </>

    )
}
