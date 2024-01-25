import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { getAuth } from './checkAuth'
import PrivateRoutes from './routes/PrivateRoutes'
import PublicRoutes from './routes/PublicRoutes'
import CommonRoutes from './routes/CommonRoutes'

function App() {
  const user = getAuth()

  const router = createBrowserRouter(
    user 
    ? [PrivateRoutes(user.isSeller), CommonRoutes()] //로그인 O
    : [PublicRoutes(), CommonRoutes()] // 로그인 X
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
