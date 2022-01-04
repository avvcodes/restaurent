import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

function Featured() {
  const [index, setIndex] = useState(0);

  const images = [
    "https://i.picsum.photos/id/1080/6858/4574.jpg?hmac=qMYBjROs2Wu589QQXRAYsxDJu4ZuRQ4PKDpb3x_Oouw",
    "https://i.picsum.photos/id/1069/3500/2333.jpg?hmac=VBJ1vR2opkcKLS9NKGDl5uPxF02u6dSqbwc1x1b4oJc",
    "https://i.picsum.photos/id/107/5760/3840.jpg?hmac=pOr5LeKE8rivWSYuheeVgYtDjCNGouPkeFjx2TsbAoY",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    } else {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{
          left: 0,
        }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src={"/img/arrowl.png"}
          alt="left_arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${index * -100}vw)` }}
      >
        {images.map((img, i) => (
          <div key={i} className={styles.imgContainer}>
            <Image src={img} alt="feaured" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{
          right: 0,
        }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src={"/img/arrowr.png"}
          alt="right_arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default Featured;
