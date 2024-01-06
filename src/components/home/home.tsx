import folioPic from '../../assets/folip_pic.png'
import styles from "./home.module.css"
import { FaLinkedinIn, FaDev, FaGithub, FaXTwitter, FaTelegram, FaInstagram} from "react-icons/fa6"
function Home() {
    alert(`${window.screen.availHeight},${window.screen.availWidth}`  );
    return (
        <div className={styles.homeDiv}>
            <div className={`shadow-lg ${styles.homeContainer}`}>
                <div className={`${styles.folioPic}`}>
                    <img src={folioPic} alt='My Pic' />
                </div>
                <div className={styles.folioContent}>
                    <div className={styles.contentArea}>
                        <span>Hi!</span>
                        <span>It's <span className={styles.owner}>{process.env.OWNER_NAME?.split(" ")[0]}</span> here!</span>
                        <p>A Software Developer based in Prayagraj, with lots of tech wizardary packed with himself!</p>
                    </div>
                    <div className={styles.contactButton}>
                        <a onClick={()=>{alert("Coming Soon!")}}>Contact Me!</a>
                    </div>
                    <div className={styles.socialButtons}>
                        <a href={process.env.LINKEDIN_URL}><FaLinkedinIn/></a>
                        <a href={process.env.GHUB_URL}><FaGithub/></a>
                        <a href={process.env.TELEGRAM_URL}><FaTelegram/></a>
                        <a href={process.env.INSTAGRAM_URL}><FaInstagram/></a>
                        <a href={process.env.DEV_URL}><FaDev/></a>
                        <a href={process.env.TWITTER_URL}><FaXTwitter/></a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home