import './App.css';
import {MainHeader} from "./components/header/MainHeader";
import {Outlet} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <MainHeader/>
      <Outlet/>
    </div>
  );
}

export default App;
