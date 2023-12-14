// components/Navbar.js
import Link from 'next/link';
import styles from './navbar.module.css'; // You will create this CSS module file

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.banner}>
                {/* Place for banner image */}
                <img src="/banner-image.jpg" alt="Banner" />
            </div>
            <ul className={styles.navMenu}>
                <li><Link href="/">Home</Link></li>
                {/* Add more menu items here */}
            </ul>
            {/* Add dropdowns and other elements as needed */}
        </nav>
    );
};

export default Navbar;