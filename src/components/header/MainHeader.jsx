import {Nav, Navbar} from "rsuite";
import CogIcon from '@rsuite/icons/legacy/Cog';
import styles from './styles.module.scss';
import {FiltersBlock} from "../filtersBlock/FiltersBlock";

export const MainHeader = () => {
  return (
    <header>
      <Navbar appearance={'subtle'}>
        <Navbar.Brand href="#">
          <img style={{width: 100, height: 30}} src={'./roomir-logo.png'} alt={'logo'}/>
        </Navbar.Brand>
        <Nav>
          <Nav.Item>Социальная сфера</Nav.Item>
          <Nav.Item>Материальная сфера</Nav.Item>
          <Nav.Item>Коммуникация</Nav.Item>
          <Nav.Item>Картография</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
      </Navbar>

      <div className={styles.filtersBlock}>
        <FiltersBlock/>
      </div>
    </header>
  );
};