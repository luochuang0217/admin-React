// import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
// const routers = []
import App from '../App'
import Login from '../pages/Login'
import Layout from '../Layout'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>
    },
    {
        path:'/login',
        element:<Login></Login>
    }
])
export default router