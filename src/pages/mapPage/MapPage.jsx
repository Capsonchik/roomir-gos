import {TopHeader} from "../../components/header/TopHeader";
import {MapStatistic} from "../../components/mapStatistic/MapStatistic";
import {MapContainer} from "../../components/mapStatistic/mapContainer/MapContainer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchGetCartRegion} from "../../store/actions";

export const MapPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetCartRegion())
  }, []);

  return (
    <>
      <TopHeader/>
      <MapStatistic/>
      <MapContainer/>
    </>
  );
};