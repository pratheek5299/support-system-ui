import styles from './Home.module.css'
import { FaAngleRight } from "react-icons/fa";
import { HiMiniPaperAirplane } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
function Home (){
    return (
        <div className={styles.homeContainer}>
            <div className={styles.topHalfContainer}>
                <div className={styles.headings}>
                    <h2>Hello there.</h2>
                    <h1>How can we help?</h1>
                </div>
                <div className={styles.recentMessagesWrapper}>
                    <div className={styles.recentMessages}>
                        <p className={styles.recentMessageHeading}>Recent Message</p>
                        <p className={styles.recentMessagesContent}>No problem. Just chat in below if you...</p>
                        <span><FaAngleRight/></span>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.sendUsAMessage}>
                    <p className={styles.sendUsMessageHeading}>Send us a Message</p>
                    <p className={styles.sendUsMessageContent}>We typically reply in a few minutes</p>
                    <span><HiMiniPaperAirplane /></span>
                </div>
                <div className={styles.searchContainer}>
                    <div className={styles.inputContainer}>
                        <input placeholder='Search for help'/>
                        <span><FaSearch/></span>
                    </div>
                    <div>
                        <p>Send custom user attributes to intercom</p>
                        <span><FaAngleRight/></span>
                    </div>
                    <div>
                        <p>Tickets explained</p>
                        <span><FaAngleRight/></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
