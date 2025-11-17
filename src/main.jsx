import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './Components/Home.jsx';
import ErrorPage from './Components/ErrorPage';
import ServiceDetails from './Components/ServiceDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service/:id",  // <-- dynamic service route
        element: <ServiceDetails />,
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
