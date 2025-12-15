import challengesJson from "../data/challenges.json";
import {Challenge} from "@/app/types/challenge";

export default function Home() {
    const challenges = challengesJson.challenges as unknown as Challenge[];
  return (
    <div>
        <header className='flex  flex-col justify-center items-center h-48 bg-rose-200'>
            <h1 className='text-2xl font-bold'>Orientation</h1>
            <p>Clarifier et valider ton projet, identifier tes compétences, rechercher une formation ou une
                alternance.</p>
        </header>
        <main>
        <ul>
            {challenges.map((
                c =>
                    <li className='text-base' key={c.id}>
                        {c.title}
                    </li>
                )
            )}
        </ul>
      </main>
    </div>
  );
}
