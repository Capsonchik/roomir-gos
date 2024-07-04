import styles from './styles.module.scss';
import {SpendingRate} from "../charts/SpendingRate";
import {PriceDinamyc} from "../priceDinamic/PriceDinamyc";
import {Deflator} from "../charts/Deflator";
export const MaterialSphere = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.first}>1</div>
        <div className={styles.second}>2</div>
        <div className={styles.third}>
          <p>Доля трат</p>
          <SpendingRate/>
        </div>
      </div>
      <div className={styles.botBlock}>
        <div className={styles.forth}>4</div>
        <div className={styles.fife}>
          <p>Дефлятор</p>
          <Deflator/>
        </div>
        <div className={styles.six}>
          <p>Динамика цены на соц. значимые группы товаров</p>
          <PriceDinamyc/>
        </div>
      </div>
    </div>
  );
};