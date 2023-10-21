import Navbar from "./navbar";
import Footer from "./footer";
import styles from "./Background.module.css";
import { Cormorant } from "next/font/google";


const cormorant = Cormorant({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={cormorant.className}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </div>
      <div className={styles.animatedwrapper}>
        <div className={`${styles.dot} ${styles.dotOne}`} />
        <div className={`${styles.dot} ${styles.dotTwo}`} />
        <div className={`${styles.dot} ${styles.dotThree}`} />
      </div>
    </div>
  );
}
