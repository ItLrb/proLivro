import styles from './Footer.module.css'
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa6'

function Footer() {
    return (
        <>
            <footer id='footer'>
        <section className={styles.sectionFooter}>
            <h3>Redes sociais</h3>
            <ul>
                <li>
                    <FaLinkedin style={{color: '#fafafa'}} />
                    LinkedIn: <a href="https://www.linkedin.com/in/italo-roberto-a4921b278/" target="_blank" rel="noopener noreferrer">
                        <FaLink style={{color: '#b8b8b8'}} />
                        https://www.linkedin.com/in/italo-roberto-a4921b278/
                    </a>
                </li>
                <li>
                    <FaGithub style={{color: '#fafafa'}} />
                    GitHub: <a href="https://github.com/ItLrb" target="_blank" rel="noopener noreferrer">
                        <FaLink style={{color: '#b8b8b8'}} />
                        https://github.com/ItLrb
                    </a>
                </li>
            </ul>
        </section>
    </footer>
        </>
    )
}

export default Footer