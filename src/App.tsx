
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { GlobalProvider } from './contexts/globalProviders'
import { router } from './router'

function App() {
  return (
<GlobalProvider>
  <RouterProvider router={router}/>
</GlobalProvider>
  )
}

export default App
