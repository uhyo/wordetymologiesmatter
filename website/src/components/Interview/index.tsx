import classes from "./Interview.module.css";

type Props = {
  position: [start: number, end: number];
  children?: React.ReactNode;
};

export const Interview: React.VFC<Props> = ({
  position: [start, end],
  children,
}) => {
  return (
    <div className={classes.wrapper}>
      <div style={{ flex: `0px ${start} 0` }} />
      <div className={classes.contents}>
        <blockquote>{children}</blockquote>
      </div>
      <div style={{ flex: `0px ${end} 0` }} />
    </div>
  );
};
