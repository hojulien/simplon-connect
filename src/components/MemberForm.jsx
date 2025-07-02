import { useState } from 'react';

export default function MemberForm({memberList, setMemberList}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [tech, setTech] = useState("");
    const [message, setMessage] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let newMember = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            tech: tech.trim(),
            message: message.trim() || "Pas de message",
            imageUrl: imageUrl.trim() || "https://s3.eu-central-1.amazonaws.com/uploads.mangoweb.org/shared-prod/visegradfund.org/uploads/2021/08/placeholder-male.jpg"
        };

        setMemberList([...memberList, newMember]);
        setFirstName('');
        setLastName('');
        setTech('');
        setMessage('');
        setImageUrl('');
    }

    return (
        <div className="max-w-md mx-auto mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="font-semibold text-gray-700">Nom</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="lastName" className="font-semibold text-gray-700">Prénom</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="tech" className="font-semibold text-gray-700">Technologie</label>
                <input
                    id="tech"
                    type="text"
                    value={tech}
                    onChange={(e) => setTech(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <label htmlFor="message" className="font-semibold text-gray-700">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />

                <label htmlFor="imageUrl" className="font-semibold text-gray-700">URL Image</label>
                <input
                    id="imageUrl"
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="submit"
                    value="Envoyer"
                    className="bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 cursor-pointer transition"
                />
            </form>
        </div>
    );
}