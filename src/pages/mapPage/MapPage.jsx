import {TopHeader} from "../../components/header/TopHeader";
import {MapStatistic} from "../../components/mapStatistic/MapStatistic";
import {MapContainer} from "../../components/mapStatistic/mapContainer/MapContainer";

export const MapPage = () => {
  return (
    <>
      <TopHeader/>
      <MapStatistic/>
      <MapContainer/>
    </>
  );
};