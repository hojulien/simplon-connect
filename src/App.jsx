import MemberCard from './components/MemberCard.jsx';
import {members} from './components/MemberCard.jsx';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, index) =>
                    <MemberCard key={index} member={member}> </MemberCard>
                )}
            </div>
        </div>
    );
}
