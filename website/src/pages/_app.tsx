import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/globals.css";
import classes from "../styles/Layout.module.css";
import "../styles/ress.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={classes.wrapper}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
