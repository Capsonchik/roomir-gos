import styles from './styles.module.scss';
import {SpendingRate} from "../charts/SpendingRate";
import {PriceDinamyc} from "../priceDinamic/PriceDinamyc";
import {Deflator} from "../charts/Deflator";
import {PurchasingActivityIndex} from "../charts/PurchasingActivityIndex";
import {AverageCheckDynamics} from "../charts/AverageCheckDynamics";
import {IndexFreeCash} from "../charts/indexFreeCash";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchGetDeflyator} from "../../store/actions";
import {selectDeflyator} from "../../store/selectors";
import {Loader} from "rsuite";
export const MaterialSphere = () => {
  const dispatch = useDispatch();

  const deflyator = useSelector(selectDeflyator)

  useEffect(() => {
    dispatch(fetchGetDeflyator())
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
          <SpendingRate/>
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
        {/*{!deflyator.length*/}
        {/*  ? (*/}
        {/*    <div className={styles.fife}>*/}
        {/*      <p>Дефлятор</p>*/}
        {/*      <Deflator data={deflyator}/>*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*  : (*/}
        {/*    <div className={styles.fifeWithLoader}>*/}
        {/*      <Loader size="md" content="Загрузка данных" />*/}
        {/*    </div>*/}
        {/*  )*/}
        {/*}*/}
        <div className={styles.six}>
          <p>Динамика цены на соц. значимые группы товаров</p>
          <PriceDinamyc/>
        </div>
      </div>
    </div>
  );
};