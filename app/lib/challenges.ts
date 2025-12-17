import { collection, getDocs } from "firebase/firestore";
import { Challenge } from "@/app/types/challenge";
import {db} from "@/firebaseConfig";

export async function getChallenges(): Promise<Challenge[]> {
    const challengesCol = collection(db, "challenges");
    const snapshot = await getDocs(challengesCol);

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Challenge[];
}