export default function Badge({state, children}) {
    // classe par défaut, ajoute un texte blanc et un fond si cliqué
    let x = 'rounded px-2 py-1';
    if (state) {
        x = "bg-gray-800 text-white rounded px-2 py-1";
    }

    // retourne la techno avec la className attachée
    return (
        <>
            <li className={x}>
                <span className="font-semibold">Techno:</span> {children}
            </li>
        </>
    );
}