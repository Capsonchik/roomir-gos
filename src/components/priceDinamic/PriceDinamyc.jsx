import styles from './styles.module.scss';
import ArrowUpIcon from '@rsuite/icons/ArrowUp';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

export const PriceDinamyc = ({data}) => {
  const renderItem = () => {
    return data.map((item, index) => {
      return (
        <div key={item.id} className={styles.item}>
          <span>{item.name}</span>
          <div>
            <span className={styles.itemPercent}>{item.calculated_value}%</span>
            {item.icon === 'up' ? <ArrowUpIcon className={styles.iconUp}/> : <ArrowDownIcon className={styles.iconDown}/>}
          </div>
        </div>
      )
    })
  }

  return (
    <div className={styles.container}>
      {renderItem()}
    </div>
  );
};