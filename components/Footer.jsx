import Image from "next/image";
import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="bg" objectFit="cover" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID IT LAMA PIZZA WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURENT</h1>
          <p className={styles.text}>
            address 1234, #123.
            <br /> INDIA, 85234
            <br /> +91-123456789
          </p>
          <p className={styles.text}>
            address 1234, #123.
            <br /> INDIA, 85234
            <br /> +91-123456789
          </p>
          <p className={styles.text}>
            address 1234, #123.
            <br /> INDIA, 85234
            <br /> +91-123456789
          </p>
          <p className={styles.text}>
            address 1234, #123.
            <br /> INDIA, 85234
            <br /> +91-123456789
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING OURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 6:00 - 18:00
          </p>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 6:00 - 18:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
