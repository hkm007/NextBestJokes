import JokeCard from "@/components/JokeCard";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className="joke-area">
        <JokeCard />
      </div>
    </main>
  );
}
