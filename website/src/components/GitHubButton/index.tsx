import classes from "./GitHubButton.module.css";

export const GitHubButton: React.VFC = () => {
  return (
    <a
      className={classes.button}
      href="https://github.com/uhyo/wordetymologiesmatter"
    >
      Open with GitHub
    </a>
  );
};
