import styles from './styles.module.scss';
export const MapStatistic = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemBlock}>
        <span>Индекс свободных денег</span>
        <span className={styles.itemStat}>450</span>
      </div>
      <div className={styles.itemBlock}>
        <span>Индекс покупательской активности</span>
        <span className={styles.itemStat}>450</span>
      </div>
      <div className={styles.itemBlock}>
        <span>Средний чек</span>
        <span className={styles.itemStat}>450</span>
      </div>
    </div>
  );
};