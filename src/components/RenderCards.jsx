import MemberCard from './MemberCard.jsx';
import { members } from '../data/members.jsx';

// exécute MemberCard n fois en bouclant via { members }

export default function RenderCards() {
    return (
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) =>
                <MemberCard key={index} member={member} />
            )}
        </div>
    );
}