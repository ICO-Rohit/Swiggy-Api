import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Offer from "./components/Offer.jsx"
import Contact from "./components/Contact.jsx"
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import Restaurant from './components/Restaurant.jsx'
import Cart from './components/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/offer",
        element: <Offer />
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
