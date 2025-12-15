import challengesJson from "../data/challenges.json";
import {Challenge} from "@/app/types/challenge";

export default function Home() {
    const challenges = challengesJson.challenges as unknown as Challenge[];
  return (
    <body>
      <header>Challenges</header>
      <main>
        <ul>
            {challenges.map((
                c =>
                    <li key={c.id}>
                        {c.title}
                    </li>
                )
            )}
        </ul>
      </main>
    </body>
  );
}
