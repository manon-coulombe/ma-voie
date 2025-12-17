import {Challenge} from "@/app/types/challenge";
import Link from "next/link";
import Duration from "@/app/components/duration";

export default function ChallengeCard({challenge}: {challenge: Challenge}) {
    return (
        <Link href={`/${challenge.id}`} className="block w-full p-6 border border-neutral-400 rounded-2xl shadow-sm hover:bg-neutral-200">
            <h2 className="mb-3 text-xl font-bold">{challenge.title}</h2>
            <Duration duration={challenge.duration}/>
            <p className="text-sm mt-2">{challenge.description}</p>
        </Link>

    )
}