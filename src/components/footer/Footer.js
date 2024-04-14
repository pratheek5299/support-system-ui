import { NavLink, Outlet } from 'react-router-dom';
import styles from './Footer.module.css'
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineChat, MdHelpOutline } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
function Footer() {
    return (
        <>
            <div className={styles.footerContainer}>
                <NavLink to={`/`} style={({isActive}) => isActive ? {color: '#0851de'}: {color: 'black'} }>
                        <RiHomeSmile2Fill/>
                        Home
                </NavLink>
                <NavLink to={`/messages`} style={({isActive}) => isActive ? {color: '#0851de'}: {color: 'black'} }>
                    <MdOutlineChat/>
                    Messages
                </NavLink>
                <NavLink to={`/help`} style={({isActive}) => isActive ? {color: '#0851de'}: {color: 'black'} }>
                    <MdHelpOutline/>
                    Help
                </NavLink>
                <NavLink to={`/news`} style={({isActive}) => isActive ? {color: '#0851de'}: {color: 'black'} }>
                    <GrAnnounce/>
                    News
                </NavLink>
            </div>
        </>
    )
}
export default Footer;