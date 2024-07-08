import styles from './styles.module.scss';
import {SpendingRate} from "../charts/SpendingRate";
import {PriceDinamyc} from "../priceDinamic/PriceDinamyc";
import {Deflator} from "../charts/Deflator";
import {PurchasingActivityIndex} from "../charts/PurchasingActivityIndex";
import {AverageCheckDynamics} from "../charts/AverageCheckDynamics";
import {IndexFreeCash} from "../charts/indexFreeCash";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetDeflyator, fetchGetPriceDynamic, fetchGetSpendingRate} from "../../store/actions";
import {selectDeflyator, selectSpendingRate} from "../../store/selectors";

export const MaterialSphere = () => {
  const dispatch = useDispatch();

  const deflyator = useSelector(selectDeflyator)
  const spendingRate = useSelector(selectSpendingRate);

  useEffect(() => {
    dispatch(fetchGetDeflyator());
    dispatch(fetchGetSpendingRate());
    dispatch(fetchGetPriceDynamic());
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.first}>
          <p>Индекс свободных денег</p>
          <IndexFreeCash/>
        </div>
        <div className={styles.second}>
          <p>Индекс покупательской активности</p>
          <PurchasingActivityIndex/>
        </div>
        <div className={styles.third}>
          <p>Доля трат</p>
          <SpendingRate data={spendingRate}/>
        </div>
      </div>
      <div className={styles.botBlock}>
        <div className={styles.forth}>
          <p>Динамика среднего чека</p>
          <AverageCheckDynamics/>
        </div>
        <div className={styles.fife}>
          <p>Дефлятор</p>
          <Deflator data={deflyator}/>
        </div>
        <div className={styles.six}>
          <p>Динамика цены на соц. значимые группы товаров</p>
          <PriceDinamyc/>
        </div>
      </div>
    </div>
  );
};