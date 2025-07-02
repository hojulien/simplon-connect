import { useState } from 'react';
import Badge from './Badge';

export default function MemberCard({member}) {
    // déclare un state qui va changer Badge
    const [toggleBadge, setToggleBadge] = useState(false);

    // gère l'interaction après click
    const handleClick = () => {
        setToggleBadge(!toggleBadge);
    }

    // rend 1 carte
    // appelle Badge pour l'affichage de la techno (avec l'interaction liée au clic)
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-md w-full" onClick={handleClick}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 px-2 py-1">Member Card</h2>
            <ul className="space-y-2 text-gray-700">
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Nom:</span> {member.firstName}
                </li>
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Prénom:</span> {member.lastName}
                </li>
                <Badge state={toggleBadge}>{member.tech}</Badge>
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Message:</span> {member.message}
                </li>
                <li className="rounded px-2 py-1">
                    <img src={member.imageUrl} alt={"Image de profil de " + member.firstName} />
                </li>
            </ul>
        </div>
    );
}