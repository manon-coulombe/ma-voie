import { use } from "react";
import challengesJson from "../data/challenges.json";
import {Challenge} from "@/app/types/challenge";
import Duration from "@/app/components/duration";
import BackButton from "@/app/components/backButton";

export default function ChallengePage({params}: {params: Promise<{slug: string}>}) {
    const { slug } = use(params);

    const challenge = (challengesJson.challenges as Challenge[]).find(
        c => {
            return c.id === slug;
        }
    )

    if (!challenge) return <>Error</>

    return (
        <main className="w-screen h-screen p-20 bg-indigo-600">
            <BackButton />
            <div className="max-w-sm mx-auto bg-neutral-50 p-14 border rounded-3xl">
                <div className="flex flex-col w-full items-center mb-8">
                    <h1 className="text-3xl font-bold text-center mb-4">{challenge.title}</h1>
                    <Duration duration={challenge.duration}/>
                </div>
                <h2 className="font-bold">Descriptif</h2>
                <p className="text-sm mb-4">{challenge.longDescription}</p>
                <h2 className="font-bold">Avant de te lancer</h2>
            <ul className="text-sm">
                {challenge.requirements.map((requirement, index) => <li key={index}>{requirement}</li>)}
            </ul>
            </div>
        </main>
    )
}