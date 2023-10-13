import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./Background.module.css";

export default function Layout({ children }) {
  return (
    <>
      {/* <div className={styles.animatedwrapper}>
        <div className={`${styles.dot} ${styles.dotOne}`} />
        <div className={`${styles.dot} ${styles.dotTwo}`} />
        <div className={`${styles.dot} ${styles.dotThree}`} />
      </div> */}
      <div className="flex flex-col  h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
