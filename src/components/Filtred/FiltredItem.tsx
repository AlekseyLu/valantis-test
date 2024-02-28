import styles from "../../styles/filtredItem.module.css";

enum Variant {
  "brand",
  "price",
}

type TField = {
  [key: string]: number | string;
};

interface IProps {
  title: string;
  arr: string[];
  variant: keyof typeof Variant;
  fn: (arg: TField) => void;
  isLoad: boolean;
  field: TField;
}

export const FiltredItem = ({
  title,
  arr,
  variant,
  fn,
  isLoad,
  field,
}: IProps) => (
  <div className={styles.fieldContainer}>
    <h2>{title}</h2>
    <div className={styles.brandContainer}>
      {arr.map(
        (item) =>
          item !== null && (
            <label className={styles.label} key={item}>
              <input
                type="checkbox"
                checked={String(field[variant]).includes(String(item))}
                onChange={() => fn({ [variant]: item })}
                className={styles.ckeckedInp}
                disabled={isLoad}
              />
              <span>{item}</span>
            </label>
          )
      )}
    </div>
  </div>
);
