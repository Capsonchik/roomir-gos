import styles from './styles.module.scss';
import {Avatar} from "rsuite";

export const PeopleItem = ({obj}) => {
  return (
    <div className={styles.itemBlock}>
      <div className={styles.logo}>
        <Avatar size="lg" circle src={obj.logo} />
        <span>{obj.name}</span>
      </div>
      <div className={styles.raiting}>
        <span className={styles.text}>{obj.rating}</span>
      </div>
    </div>
  );
};