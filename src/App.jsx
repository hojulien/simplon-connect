import RenderCards from './components/RenderCards.jsx';
import MemberForm from './components/MemberForm.jsx';
import { members } from './data/members.jsx';
import { useState } from 'react';

export default function App() {
    const [memberList, setMemberList] = useState(members);
    // on stocke les membres dans le localStorage avec JSON.stringify
    // (récupération via JSON.parse)
    if (!localStorage.getItem("memberList")) {
        localStorage.setItem("memberList", JSON.stringify(members));
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-10">
            <MemberForm setMemberList={setMemberList}/>
            <RenderCards setMemberList={setMemberList}/>
        </div>
    );
}
