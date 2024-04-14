import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import styles from './Body.module.css'
function Body(){
    return (
        <div className={styles.bodyContainer}>
            
            <Outlet/>
            <Footer/>
        </div>
    )
    
}
export default Body;