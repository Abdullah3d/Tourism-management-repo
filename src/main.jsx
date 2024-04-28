import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import AllTouristsSpot from './components/AllTouristsSpot.jsx';
import AddTouristsSpot from './components/AddTouristsSpot.jsx';
import MyList from './components/MyList.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PrivetRoute from './Provider/PrivetRoute.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import TouristsSpot from './components/TouristsSpot.jsx';
import ViewTouristsSpot from './components/ViewTouristsSpot.jsx';
const router = createBrowserRouter([

  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch('http://localhost:5000/tourist')
      },
      {
        path: "view/:id",
        element: <PrivetRoute><ViewTouristsSpot></ViewTouristsSpot></PrivetRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/tourist/${params.id}`)
      },
      {
        path: "touristsSpot",
        element: <TouristsSpot></TouristsSpot>
      },
      {
        path: "allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: "addTouristsSpot",
        element: <AddTouristsSpot></AddTouristsSpot>
      },
      {
        path: "myList",
        element: <PrivetRoute><MyList></MyList></PrivetRoute>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
