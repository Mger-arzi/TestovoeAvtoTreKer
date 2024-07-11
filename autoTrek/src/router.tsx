import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { DeviceListPage } from './page/DeviceListPage'
import { LoginForm } from './components/login-form/login-form'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
  {
    element: <DeviceListPage />,
    path: '/',
  }
]
// const router = createBrowserRouter([
//   {
//     element: <LoginForm />,
//     path: '/login',
//   },
//   {
//     path: '/',
//     element: <DeviceListPage />,
//   },

// ])

export function Router() {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([...publicRoutes])
// export function Router() {
//   return <RouterProvider router={router} />
// }
// export function PrivateRoutes() {
//   const isAuthenticated = false

//   return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
// }

