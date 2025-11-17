import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import BlogDetails from './pages/BlogDetails/BlogDetails.jsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,             // 🧱 Common layout (Header + Footer)
    children: [
      { index: true, element: <Home /> },     
       // ⭐ Blog Page
      { path: 'blogs/:slug', element: <BlogDetails /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
