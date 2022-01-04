import styles from "../styles/Featured.module.css";
import Image from "next/image";

function Featured() {
  const images = [
    "/img/featured.jpg",
    // "/img/featured2.png",
    // "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{
          left: 0,
        }}
      >
        <Image src={"/img/arrowl.png"} alt="left_arrow" layout="fill" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((img, i) => (
            <Image key={i} src={img} alt="feaured" width="100%" height="75%" />
          ))}
        </div>
      </div>
      <div
        className={styles.arrowContainer}
        style={{
          right: 0,
        }}
      >
        <Image src={"/img/arrowr.png"} alt="right_arrow" layout="fill" />
      </div>
    </div>
  );
}

export default Featured;
