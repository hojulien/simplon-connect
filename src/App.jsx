import RenderCards from './components/RenderCards.jsx';
import MemberForm from './components/MemberForm.jsx';
import { members } from './data/members.jsx';
import { useState } from 'react';

export default function App() {
    const [memberList, setMemberList] = useState(members);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-10">
            <MemberForm memberList={memberList} setMemberList={setMemberList}/>
            <RenderCards memberList={memberList} />
        </div>
    );
}
