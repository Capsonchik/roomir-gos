import styles from './styles.module.scss';
import {MapDropDown} from "../mapComponents/mapDropDown/MapDropDown";
import {CityItem} from "../mapComponents/cityItem/CityItem";
import {REGION} from "../../consts/filterConsts";
import {Map} from "../mapComponents/map/Map";
import {useSelector} from "react-redux";
import {selectCartRegions} from "../../../store/selectors";
export const MapContainer = () => {
  const regions = useSelector(selectCartRegions);

  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <Map/>
      </div>
      <div className={styles.stat}>
        <MapDropDown/>
        <div className={styles.cityBlock}>
          {regions &&  regions.map((region) => {
            return <CityItem key={region.id} obj={region}/>
          })}
        </div>
      </div>
    </div>
  );
};