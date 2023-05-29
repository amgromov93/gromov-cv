import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  RouterProvider, 
  createBrowserRouter 
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"

import "./sass/style.module.scss"

import Home from './routes/Home/Home';
import Portfolio from './routes/Portfolio/Portfolio';
import Contacts from './routes/Contacts/Contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/contacts",
    element: <Contacts />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);