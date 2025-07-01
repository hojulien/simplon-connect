export const members = [
  {
    firstName: "Inès",
    lastName: "Dupont",
    tech: "React",
    message: "Toujours partante pour un nouveau challenge frontend !",
    imageUrl:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    firstName: "Liam",
    lastName: "Nguyen",
    tech: "Laravel",
    message: "Le back c’est ma passion, mais j’apprivoise React petit à petit.",
    imageUrl:
      "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    firstName: "Amina",
    lastName: "Benali",
    tech: "Vue.js",
    message: "Pro du CSS, j’adore soigner les détails visuels.",
    imageUrl:
      "https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    firstName: "Noé",
    lastName: "Durand",
    tech: "Node.js",
    message:
      "Le JS côté serveur, c’est mon truc. Je suis ici pour monter en fullstack.",
    imageUrl:
      "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    firstName: "Clara",
    lastName: "Morel",
    tech: "Python",
    message: "J’ai un faible pour les API propres et bien documentées.",
    imageUrl:
      "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

export default function MemberCard({member}) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200 max-w-md w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Member Card</h2>
            <ul className="space-y-2 text-gray-700">
                <li>
                    <span className="font-semibold">Nom:</span> {member.firstName}
                </li>
                <li>
                    <span className="font-semibold">Prénom:</span> {member.lastName}
                </li>
                <li>
                    <span className="font-semibold">Techno:</span> {member.tech}
                </li>
                <li>
                    <span className="font-semibold">Message:</span> {member.message}
                </li>
                <li>
                    <img src={member.imageUrl} alt={"Image de profil de " + member.firstName} />
                </li>
            </ul>
        </div>
    );
}