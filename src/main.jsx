import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Components/Home.jsx';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <React.Suspense fallback="loading....">
              <RouterProvider router={router} />
        </React.Suspense>   
  </StrictMode>
);
