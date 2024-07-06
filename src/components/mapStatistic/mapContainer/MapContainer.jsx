import styles from './styles.module.scss';
import {MapDropDown} from "../mapComponents/mapDropDown/MapDropDown";
import {CityItem} from "../mapComponents/cityItem/CityItem";
import {REGION} from "../../consts/filterConsts";
export const MapContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>

      </div>
      <div className={styles.stat}>
        <MapDropDown/>
        <div className={styles.cityBlock}>
          {REGION.map((region) => {
            return <CityItem obj={region}/>
          })}
        </div>
      </div>
    </div>
  );
};