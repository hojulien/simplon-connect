import MemberCard from './MemberCard.jsx';

// exécute MemberCard n fois en bouclant via { members }
// on passe une liste de membres plutôt qu'un localStorage car celui-ci ne devrait être uniquement utilisé que pour les ajouts et modifications

export default function RenderCards({memberList, setMemberList}) {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberList.map((member, index) =>
                <MemberCard key={index} member={member} setMemberList={setMemberList}/>
            )}
        </div>
    );
}