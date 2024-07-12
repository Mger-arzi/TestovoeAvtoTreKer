import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { DeviceListPage } from '../page/DeviceListPage'
import { LoginForm } from '../components/login-form/login-form'
import { useLoginQuery } from '../api/services/autoTrek.services'

const publicRoutes: RouteObject[] = [
  {
    element: <LoginForm />,
    path: '/login',
  },
]
export const privateRoutes: RouteObject[] = [
  {
    element: <DeviceListPage />,
    path: '/',
  },
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
const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
  },
])
export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isError, isLoading } = useLoginQuery()

  if (isLoading) {
    return <div>...loading</div>
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

