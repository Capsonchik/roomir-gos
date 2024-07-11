import styles from './styles.module.scss';
import {SpendingRate} from "../charts/SpendingRate";
import {PriceDinamyc} from "../priceDinamic/PriceDinamyc";
import {Deflator} from "../charts/Deflator";
import {PurchasingActivityIndex} from "../charts/PurchasingActivityIndex";
import {AverageCheckDynamics} from "../charts/AverageCheckDynamics";
import {IndexFreeCash} from "../charts/indexFreeCash";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  fetchGetAverageCheck,
  fetchGetDeflyator, fetchGetFreeCashIndex,
  fetchGetPriceDynamic,
  fetchGetPurchasingActivityIndex,
  fetchGetSpendingRate
} from "../../store/actions";
import {
  selectAverageCheck,
  selectDeflyator,
  selectFreeCashIndex,
  selectPurchasingActivityIndex,
  selectSpendingRate
} from "../../store/selectors";
import {ConsumerActivityIndex} from "../charts/ConsumerActivityIndex";

export const MaterialSphere = () => {
  const dispatch = useDispatch();

  const deflyator = useSelector(selectDeflyator);
  const spendingRate = useSelector(selectSpendingRate);
  const purchasingActivityIndex = useSelector(selectPurchasingActivityIndex);
  const freeCashIndex = useSelector(selectFreeCashIndex);
  const averageCheck = useSelector(selectAverageCheck);



  useEffect(() => {
    dispatch(fetchGetDeflyator());
    dispatch(fetchGetSpendingRate());
    dispatch(fetchGetPriceDynamic());
    dispatch(fetchGetPurchasingActivityIndex());
    dispatch(fetchGetFreeCashIndex());
    dispatch(fetchGetAverageCheck());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <div className={styles.first}>
          <p>Индекс свободных денег</p>
          <IndexFreeCash data={freeCashIndex}/>
        </div>
        <div className={styles.second}>
          <p>Индекс покупательской активности</p>
          <PurchasingActivityIndex data={purchasingActivityIndex} />
        </div>
        <div className={styles.third}>
          <p>Доля трат</p>
          <SpendingRate data={spendingRate}/>
        </div>
      </div>
      <div className={styles.botBlock}>
        <div className={styles.forth}>
          <p>Динамика среднего чека</p>
          <AverageCheckDynamics data={averageCheck}/>
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
      <div className={styles.bottomBlock}>
        <p>Индекс потребительской активности</p>
        <ConsumerActivityIndex/>
      </div>

    </div>
  );
};