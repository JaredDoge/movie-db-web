import styles from "./Treding.module.css"

const Treding = () => {
    return (
        <div>
            <h3 className={styles.title}>Trending</h3>
            <ul className={styles.list}>
                <li><button>Today</button></li>
                <li><button>This week</button></li>
            </ul>

        </div>
    )
}

export default Treding;