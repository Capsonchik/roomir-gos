import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {MaterialSphere} from "../components/materialSphere/materialSphere";
import {Communicate} from "../components/communicate/Communicate";
import {MapPage} from "../pages/mapPage/MapPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <MaterialSphere/> },
      { path: '/communicate', element: <Communicate/> },
    ],
  },
  {
    path: '/map',
    element: <MapPage/>
  }
])