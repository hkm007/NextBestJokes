import JokeCard from "@/components/JokeCard";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.joke_area}>
      <JokeCard />
    </main>
  );
}
