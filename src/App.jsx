import RenderCards from './components/RenderCards.jsx';
import MemberForm from './components/MemberForm.jsx';
import SearchBar from './components/SearchBar.jsx';
import { members } from './data/members.jsx';
import { useState } from 'react';

export default function App() {
    // useState pour l'état des membres
    const [memberList, setMemberList] = useState(members);
    // si la liste des membres est vide dans le storage, on le réinitialise
    // JSON.stringify pour convertir en chaîne de caractères
    if (!localStorage.getItem("memberList")) {
        localStorage.setItem("memberList", JSON.stringify(members));
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-10">
            <MemberForm setMemberList={setMemberList}/>
            <SearchBar setMemberList={setMemberList}/>
            <RenderCards memberList={memberList} setMemberList={setMemberList}/>
        </div>
    );
}
