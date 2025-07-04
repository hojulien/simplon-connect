import { useState } from 'react';

export default function Badge({children}) {
    const [toggleBadge, setToggleBadge] = useState(false);

    // gère l'interaction après click
    const handleClick = () => {
        setToggleBadge(!toggleBadge);
    }


    // classe par défaut, ajoute un texte blanc et un fond si cliqué
    let x = 'rounded px-2 py-1';
    if (toggleBadge) {
        x = "bg-gray-800 text-white rounded px-2 py-1";
    }

    // retourne la techno avec la className attachée
    return (
        <>
            <li className={x} onClick={handleClick}>
                <span className="font-semibold">Techno:</span> {children}
            </li>
        </>
    );
}