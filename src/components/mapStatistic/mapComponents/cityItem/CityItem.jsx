import styles from './styles.module.scss';
import ArrowUpIcon from '@rsuite/icons/ArrowUp';
import ArrowDownIcon from '@rsuite/icons/ArrowDown';

export const CityItem = ({obj}) => {

  return (
    <div className={styles.container}>
      <span>{obj}</span>
      <ArrowUpIcon className={styles.iconUp}/>
    </div>
  );
};

