
import { RouterProvider } from 'react-router-dom'
import Toastify from './components/Toastify'

import router from './router/Index'

function App() {

  return (
    <>
      <Toastify />
      <RouterProvider router={router} />
    </>
  )
}

export default App
