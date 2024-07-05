import styles from './styles.module.scss';

export const RatingItem = ({obj, index}) => {
  const itemStyle = {
    backgroundColor: `rgba(34, 139, 34, ${1 - index * 0.05})` // Используем зеленый цвет с изменяемой прозрачностью
  };

  return (
    <div className={styles.itemBlock}>
      <div>
        <span className={styles.logo}>
          <img className={styles.img} src={obj.logo} alt=""/>
        </span>
        <span>{obj.name}</span>
      </div>
      <div className={styles.raiting} style={itemStyle}>
        <span className={styles.text}>{obj.rating}</span>
      </div>
    </div>
  );
};