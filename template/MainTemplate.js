import React from "react";
import Head from "next/head";
import NavbarComponent from "../components/Navbars/NavbarComponent";
import BottomNav from "../components/Navbars/BottomNav";
import styles from "./maintemplate.module.css";
import FooterTop from "../components/Footer/FooterTop";
import ExtraFooter from "../components/Footer/ExtraFooter";

function MainTemplate({ children }) {
  return (
    <>
      {/* Head  */}
      <Head>
        <title>UrbanHoop.in</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
      </Head>
      <NavbarComponent />
      <BottomNav />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <FooterTop />
      <br />
      <ExtraFooter />
      <br />
      {/* Footer */}
      <footer className={styles.footer}>
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          UrbanHoop.in
        </a>
      </footer>
    </>
  );
}

export default MainTemplate;
