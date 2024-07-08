import styles from './styles.module.scss';
import ArrowUpIcon from '@rsuite/icons/ArrowUp';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

export const CityItem = ({obj}) => {

  return (
    <div className={styles.container}>
      <span>{obj.region}</span>
      <div className={styles.stat}>
        <span>400</span>
        {obj.Icon === 'up' ? <ArrowUpIcon className={styles.iconUp}/> : <ArrowDownIcon className={styles.iconDown}/>}
      </div>
    </div>
  );
};

