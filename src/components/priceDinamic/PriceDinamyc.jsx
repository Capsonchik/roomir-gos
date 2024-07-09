import styles from './styles.module.scss';
import ArrowUpIcon from '@rsuite/icons/ArrowUp';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

export const PriceDinamyc = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span>Баранина</span>
        <div>
          <span className={styles.itemPercent}>0.7%</span>
          <ArrowUpIcon className={styles.iconUp}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Говядина</span>
        <div>
          <span className={styles.itemPercent}>-1.9%</span>
          <ArrowDownIcon className={styles.iconDown}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Куры</span>
        <div>
          <span className={styles.itemPercent}>-1.5%</span>
          <ArrowUpIcon className={styles.iconUp}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Масло подсолнечное</span>
        <div>
          <span className={styles.itemPercent}>-2.5%</span>
          <ArrowDownIcon className={styles.iconDown}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Масло сливочное</span>
        <div>
          <span className={styles.itemPercent}>0.7%</span>
          <ArrowDownIcon className={styles.iconDown}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Рыба мороженная</span>
        <div>
          <span className={styles.itemPercent}>0.7%</span>
          <ArrowUpIcon className={styles.iconUp}/>
        </div>
      </div>
      <div className={styles.item}>
        <span>Свинина</span>
        <div>
          <span className={styles.itemPercent}>0.7%</span>
          <ArrowUpIcon className={styles.iconUp}/>
        </div>
      </div>
    </div>
  );
};