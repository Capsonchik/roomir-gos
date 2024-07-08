import styles from './styles.module.scss';
import {ConsumerActivityIndex} from "../charts/ConsumerActivityIndex";

export const SocialSphere = () => {
  return (
    <div className={styles.container}>
      <ConsumerActivityIndex/>
    </div>
  );
};