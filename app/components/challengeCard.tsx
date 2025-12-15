import {Challenge} from "@/app/types/challenge";

export default function ChallengeCard({challenge}: {challenge: Challenge}) {
    return (
        <a href="#" className="bg-neutral-100 block w-full p-6 border border-neutral-400 rounded-2xl shadow-sm hover:bg-neutral-300">
            <h2 className="mb-3 text-2xl font-bold">{challenge.title}</h2>
            <p className="text-body mb-2">{challenge.duration}</p>
            <p className="text-body">{challenge.description}</p>
        </a>

    )
}