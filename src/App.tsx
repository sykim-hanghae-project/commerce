import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { UserContextProvider } from './context/UserContext'

function App() {
  
  const router = createBrowserRouter([
    PrivateRoutes(), //로그인 유무 관계O
    CommonRoutes() //로그인 유무 관계X
  ])

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App
