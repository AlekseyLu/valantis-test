import styles from "../../styles/product.module.css";

interface IProps {
  id: string;
  product: string;
  price: number;
  brand: string | null;
}

export const Product = ({ id, product, price, brand }: IProps) => {
  return (
    <li className={styles.card}>
      {brand !== null && <span className={styles.descr}>{brand}</span>}
      <h3 className={styles.title}>{product}</h3>
      <p className={styles.price}>Цена: {price} р.</p>
      <span className={styles.descr}>{id}</span>
    </li>
  );
};
