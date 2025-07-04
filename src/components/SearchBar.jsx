import { useState, useEffect } from 'react';

// barre de recherche (filtre prénom uniquement)

export default function SearchBar({setMemberList}) {
    // useState pour la variable contenue dans l'input
    const [searchName, setSearchName] = useState("");

    // récupère la liste complète des membres
    let currentList = JSON.parse(localStorage.getItem("memberList"));

    // useEffect, s'exécute uniquement au changement de searchName
    useEffect(() => {
        // si le champ contient du texte, effectue le filtre à partir du tableau complet
        // si le champ est vide, remet le tableau complet
        if (searchName !== "") {
            let filteredMemberList = currentList.filter((x) => x.firstName.toLowerCase().includes(searchName.toLowerCase()));
            setMemberList(filteredMemberList);
        } else {
            setMemberList(currentList);
        }
    }, [searchName]);

    return (
        <div className="max-w-md mx-auto mb-8 bg-white p-4 rounded-xl shadow-md border border-gray-200">
            <input 
                type="text" 
                placeholder="Rechercher un membre..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
    );
}