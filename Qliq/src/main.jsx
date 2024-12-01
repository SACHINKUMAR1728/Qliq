import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App';
import Notfound from './pages/Notfound';
import Login from './pages/login';
import Homepage from './pages/Homepage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      <Route index element={<Homepage />} />
      <Route path="login" element={<Login />} /> {/* Corrected component name */}

      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

// Render the router provider
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
