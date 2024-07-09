import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {MaterialSphere} from "../components/materialSphere/materialSphere";
import {Communicate} from "../components/communicate/Communicate";
import {MapPage} from "../pages/mapPage/MapPage";
import {SocialSphere} from "../components/socialSphere/SocialSphere";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      // { index: true, element: <SocialSphere/> },
      { index: true, element: <MaterialSphere/> },
      { path: '/communicate', element: <Communicate/> },
      {path: '/social', element: <SocialSphere/> },
    ],
  },
  {
    path: '/map',
    element: <MapPage/>
  }
])