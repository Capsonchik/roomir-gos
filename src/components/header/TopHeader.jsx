import {Nav, Navbar} from "rsuite";
import {Link, useLocation} from "react-router-dom";
import styles from "./styles.module.scss";
import CogIcon from "@rsuite/icons/legacy/Cog";

export const TopHeader = () => {
  const location = useLocation().pathname;

  return (
    <Navbar appearance={'subtle'}>
      <Navbar.Brand href="/">
        <img style={{width: 100, height: 30}} src={'./roomir-logo.png'} alt={'logo'}/>
      </Navbar.Brand>
      <Nav>

        <Nav.Item>
          <Link className={location === '/' ? styles.activeLink : styles.link} to="/">Социальная сфера</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={location === '/material' ? styles.activeLink : styles.link} to={'/material'}>Материальная сфера</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={location === '/communicate' ? styles.activeLink : styles.link} to={'/communicate'}>Коммуникация</Link>
        </Nav.Item>
        <Nav.Item>
          <Link className={location === '/map' ? styles.activeLink : styles.link} to={'/map'}>Картография</Link>
        </Nav.Item>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};