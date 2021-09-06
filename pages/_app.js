import "../styles/globals.css";
import MainTemplate from "../template/MainTemplate";

function MyApp({ Component, pageProps }) {
  return (
    <MainTemplate>
      <Component {...pageProps} />
    </MainTemplate>
  );
}

export default MyApp;
