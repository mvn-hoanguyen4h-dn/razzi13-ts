import type { AppProps } from "next/app";
import "primereact/resources/primereact.min.css";
import "./../assets/scss/styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
