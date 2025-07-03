import MemberCard from './MemberCard.jsx';

// exécute MemberCard n fois en bouclant via { members }

export default function RenderCards({setMemberList}) {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {JSON.parse(localStorage.getItem("memberList")).map((member, index) =>
                <MemberCard key={index} member={member} setMemberList={setMemberList}/>
            )}
        </div>
    );
}