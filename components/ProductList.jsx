import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac
        varius velit. Nulla non gravida nunc. Duis tortor dolor, scelerisque
        accumsan commodo a, viverra ut risus. Curabitur vestibulum id mi vitae
        sodales.{" "}
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
