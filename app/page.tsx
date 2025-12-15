import challengesJson from "./data/challenges.json";
import {Challenge} from "@/app/types/challenge";
import ChallengeCard from "@/app/components/challengeCard";

export default function Home() {
    const challenges = challengesJson.challenges as Challenge[];
    return (
      <div>
        <header className='flex flex-col sticky top-0 p-6 justify-center items-center h-48 bg-purple-200 shadow-xl/20'>
            <h1 className='text-4xl font-bold mb-2'>Orientation</h1>
            <p>Clarifier et valider ton projet, identifier tes compétences, rechercher une formation ou une
                alternance.</p>
        </header>
        <main className=' m-8'>
            <ul>
                {challenges.map((
                    c =>
                        <li className='w-full text-base mb-6' key={c.id}>
                            <ChallengeCard challenge={c} />
                        </li>
                    )
                )}
            </ul>
      </main>
    </div>
  );
}
