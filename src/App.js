import logo from './logo.svg';
import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Outlet} from "react-router-dom";
import {MaterialSphere} from "./components/materialSphere/materialSphere";

function App() {
  return (
    <div className="App">
      <MainHeader/>
      <Outlet/>
      <MaterialSphere/>
    </div>
  );
}

export default App;
