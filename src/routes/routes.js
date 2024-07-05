import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {MaterialSphere} from "../components/materialSphere/materialSphere";
import {Communicate} from "../components/communicate/Communicate";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <MaterialSphere/> },
      { path: '/communicate', element: <Communicate/> },
    ],
  },
])