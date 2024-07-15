import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { DeviceListPage } from '../page/DeviceListPage'
import { LoginForm } from '../components/login-form/login-form'
import { useLoginQuery } from '../api/services/autoTrek.service'

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



function PrivateRoutes() {
  const { isError, isLoading } = useLoginQuery()

  if (isLoading) {
    return <div>...loading</div>
  }
  const isAuthenticated = !isError



  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const router = createBrowserRouter([
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