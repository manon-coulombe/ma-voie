import { use } from "react";
import challengesJson from "../../data/challenges.json";
import {Challenge} from "@/app/types/challenge";

export default function ChallengePage({params}: {params: Promise<{slug: string}>}) {
    const { slug } = use(params);
    console.log(slug)

    const challenge = (challengesJson.challenges as Challenge[]).find(
        c => {
            console.log(c.id)
            return c.id === slug;
        }
    )

    if (!challenge) return <>Error</>

    return (
        <main className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold">{challenge.title}</h1>
            <p className="text-body mb-6">{challenge.duration}</p>
            <h2 className="font-bold">Descriptif</h2>
            <p className="text-body mb-4">{challenge.longDescription}</p>
            <h2 className="font-bold">Avant de te lancer</h2>
            <ul className="text-body">
                {challenge.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
        </main>
    )
}