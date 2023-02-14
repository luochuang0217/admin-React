import Head from "./components/Head"
import Side from "./components/Side"
import style from './index.module.css'
// import { Outlet } from 'react-router-dom'
const Layout = () =>{
    return (
        <div className={style.layout}>
        <Head></Head>
        <Side></Side>
        </div>
    )
}
export default Layout