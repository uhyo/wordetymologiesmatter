import classes from "./TweetButton.module.css";

export const TweetButton: React.VFC = () => {
  return (
    <a
      className={classes.button}
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
        "https://wordetymologiesmatter.vercel.app"
      )}&hashtags=WordEtymologiesMatter`}
    >
      Tweet with #WordEtymologiesMatter
    </a>
  );
};
