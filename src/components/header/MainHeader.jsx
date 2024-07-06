import styles from './styles.module.scss';
import {FiltersBlock} from "../filtersBlock/FiltersBlock";
import {TopHeader} from "./TopHeader";

export const MainHeader = () => {

  return (
    <header>
      <TopHeader/>
      <div className={styles.filtersBlock}>
        <FiltersBlock/>
      </div>
    </header>
  );
};