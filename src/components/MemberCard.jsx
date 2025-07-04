import { useState } from 'react';
import Badge from './Badge';

export default function MemberCard({member, setMemberList}) {
    const [isHovered, setIsHovered] = useState(false);

    // affiche/cache le bouton de suppression selon le statut
    const toggleDeleteButton = () => {
        setIsHovered(!isHovered);
    }

    // supprime un membre (usage de localStorage avec setMemberList pour rendre le changement "permanent" même après actualisation de la page)
    const deleteMember = (e) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce membre?')) {
            let filteredMemberList = JSON.parse(localStorage.getItem("memberList")).filter((x) => (x.firstName !== member.firstName) && (x.lastName !== member.lastName));
            setMemberList(filteredMemberList);
            localStorage.setItem("memberList", JSON.stringify(filteredMemberList));
        }
    }

    // rend 1 carte
    // appelle Badge pour l'affichage de la techno (avec l'interaction liée au clic)
    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200 max-w-md w-full" onMouseEnter={toggleDeleteButton} onMouseLeave={toggleDeleteButton}>
            <h2 className="text-xl font-bold text-gray-800 mb-4 px-2 py-1">Member Card</h2>
            <ul className="space-y-2 text-gray-700">
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Prénom:</span> {member.firstName}
                </li>
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Nom:</span> {member.lastName}
                </li>
                <Badge>{member.tech}</Badge>
                <li className="rounded px-2 py-1">
                    <span className="font-semibold">Message:</span> {member.message}
                </li>
                <li className="rounded px-2 py-1">
                    <img className="w-32 h-32 object-cover" src={member.imageUrl} alt={"Image de profil de " + member.firstName} />
                </li>
                <li className={"rounded px-2 py-1" + (isHovered ? 'visible' : " invisible") }>
                    <button className="bg-red-900 cursor-pointer w-full text-white mx-auto shadow-md rounded px-2 py-2" onClick={deleteMember}>Supprimer le membre</button>
                </li>
            </ul>
        </div>
    );
}