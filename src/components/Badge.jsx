export default function Badge(props) {
    // classe par défaut, ajoute un texte blanc et un fond si cliqué
    let x = 'rounded px-2 py-1';
    if (props.toggle) {
        x = "bg-gray-800 text-white rounded px-2 py-1";
    }

    // retourne la techno avec la className attachée
    return (
        <>
            <li className={x}>
                <span className="font-semibold">Techno:</span> {props.tech}
            </li>
        </>
    );
}