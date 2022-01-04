import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" width="500" height="500" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        varius velit
      </p>
    </div>
  );
};

export default ProductCard;
