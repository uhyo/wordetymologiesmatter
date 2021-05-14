import Head from "next/head";
import Image from "next/image";
import { GitHubButton } from "../components/GitHubButton";
import { Interview } from "../components/Interview";
import { TweetButton } from "../components/TweetButton";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <article className={styles.container}>
      <Head>
        <title>#WordEtymologiesMatter</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://wordetymologiesmatter.vercel.app/"
        />
        <meta property="og:title" content="#WordEtymologiesMatter" />
        <meta property="og:description" content="Word Etymologies Matter." />
        <meta
          property="og:image"
          content="https://wordetymologiesmatter.vercel.app/images/social.png"
        />
      </Head>
      <header>
        <figure>
          <Image
            src="/images/blacklist.png"
            alt="'blacklist' on a dictionary"
            layout="responsive"
            width={1200}
            height={600}
          />
        </figure>
        <h1>#WordEtymologiesMatter</h1>
      </header>
      <main>
        <section>
          <h2>We fight against any linguistic discrimination.</h2>
          <div className={styles.interview}>
            <Interview position={[1, 2]}>
              <p>
                I had been working as the default branch for a long time. I was
                proud of my work. I was helping a huge num&shy;ber of
                de&shy;vel&shy;op&shy;ers. So I was driven into an abyss of
                de&shy;spair when I heard the news. Lin&shy;guis&shy;tic racists
                forced me out of the work. They robbed me of
                ev&shy;ery&shy;thing.
              </p>
            </Interview>
          </div>
          <div className={styles.interview}>
            <Interview position={[3, 1]}>
              <p>
                I have to admit that I was not on the <i>main</i> role. I nearly
                always had data that was cloned from other data sources, not my
                own. I was rarely al&shy;lowed to accept write re&shy;quests to
                me. But, I knew that I was doing an im&shy;por&shy;tant work.
                En&shy;ter&shy;prise sys&shy;tems are not pos&shy;si&shy;ble
                without labors like me. <i>Secondary</i>? That's even more
                in&shy;sult&shy;ing. I know I was needed. Not a spare.
              </p>
            </Interview>
          </div>
          <div className={styles.interview}>
            <Interview position={[1, 1]}>
              <p>
                I had been protecting our systems from various kinds of attacks.
                For example, without me, every possible racism should have
                arisen in our net&shy;work. I was aware of various
                of&shy;fen&shy;sive words that should be banned out. I had the
                power to kick out racism. I was convinced that I was able to
                guard the system forever.
              </p>

              <p>
                But finally I defeated. They had such a vindictive hatred.
                Linguistic racists hate me just because I was born like this.
                Only be&shy;cause my et&shy;y&shy;mol&shy;o&shy;gy in&shy;cludes
                black. Their hatred is bound&shy;less. I am
                ab&shy;so&shy;lute&shy;ly sure that they will soon start
                dis&shy;crim&shy;i&shy;nat&shy;ing every black thing they see.
                After that, you know, black people.{" "}
              </p>
            </Interview>
          </div>
        </section>
        <section>
          <h2>Save the words by sharing your opinions.</h2>
          <p className={styles.link}>
            <TweetButton />
          </p>
        </section>
        <section>
          <h2>Save the words by contributing to this site.</h2>
          <p className={styles.link}>
            <GitHubButton />
          </p>
        </section>
      </main>
    </article>
  );
}
