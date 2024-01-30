import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'
import CommonRoutes from './routes/CommonRoutes'
import { UserContextProvider } from './context/UserContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  
  const router = createBrowserRouter([
    PrivateRoutes(), //로그인 유무 관계O
    CommonRoutes() //로그인 유무 관계X
  ])

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  )
}

export default App
