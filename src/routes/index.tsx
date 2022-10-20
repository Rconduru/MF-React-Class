import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './home'
import Login from './login'

const createRoutes = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<Login />} path='/' />,
    <Route element={<Home />} path='/home' />,
  ])
)

export default createRoutes
