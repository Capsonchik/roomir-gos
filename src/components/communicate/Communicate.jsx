import styles from './styles.module.scss';
import {RatingItem} from "./item/RatingItem";
import {COMMUNICATE_TV, COMMUNICATE_RADIO, COMMUNICATE_SITE, COMMUNICATE_POLITIC, COMMUNICATE_CELEBRETIES} from "../consts/comunicateConst";
import {PeopleItem} from "./peopleItem/PeopleItem";

export const Communicate = () => {


  return (
    <div className={styles.container}>
      <div className={styles.containerBlock}>
        <p className={styles.title}>Телеканалы</p>
        <div className={styles.items}>
          {COMMUNICATE_TV.map((item, index) => {
            return <RatingItem key={item.id} obj={item} index={index}/>
          })}
        </div>
      </div>
      <div className={styles.containerBlock}>
        <p className={styles.title}>Сайты</p>
        <div className={styles.items}>
          {COMMUNICATE_SITE.map((item, index) => {
            return <RatingItem key={item.id} obj={item} index={index}/>
          })}
        </div>
      </div>
      <div className={styles.containerBlock}>
        <p className={styles.title}>Радио</p>
        <div className={styles.items}>
          {COMMUNICATE_RADIO.map((item, index) => {
            return <RatingItem key={item.id} obj={item} index={index}/>
          })}
        </div>
      </div>
      <div className={styles.containerBlock}>
        <p className={styles.title}>Рейтинг доверия</p>
        <div className={styles.items}>
          {COMMUNICATE_POLITIC.map((item) => {
            return <PeopleItem key={item.id} obj={item}/>
          })}
        </div>
      </div>
      <div className={styles.containerBlock}>
        <p className={styles.title}>Рейтинг публичных персон</p>
        <div className={styles.items}>
          {COMMUNICATE_CELEBRETIES.map((item) => {
            return <PeopleItem key={item.id} obj={item}/>
          })}
        </div>
      </div>
    </div>
  );
};