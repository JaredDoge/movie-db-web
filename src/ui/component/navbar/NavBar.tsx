import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={styles.bar}>
            <Link to="/" className={styles.main}>Movie DB</Link>
            <Link to="/movies" className={styles.item}>Movies</Link>
            <Link to="/tv" className={styles.item}>TV Shows</Link>
            <Link to="/people" className={styles.item}>People</Link>
        </div>
    )
    
}

export default NavBar