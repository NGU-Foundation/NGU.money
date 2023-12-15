// components/navbar.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './navbar.module.css';
import NGUImage from '../assets/NGU.png'; // Assuming this is the correct path to your image

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.banner}>
                {/* Use the Next.js Image component for the banner */}
                <Image 
                    src={NGUImage} // Use the imported image variable
                    alt="Number Go Up." 
                    width={35} // Specify width
                    height={35} // Specify height
                    className={styles.circularImage} // Apply the circular style
                />
            </div>
            <ul className={styles.navMenu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">My Profile</Link></li> {/* Updated href for profile */}
                <li><Link href="/charts">Charts</Link></li> {/* Updated href for charts */}
                <li><Link href="/trade-battle">Trade Battle</Link></li> {/* Updated href for trade battle */}
                <li><Link href="/burn-ngu"> 🔥 </Link></li> {/* Updated href for trade battle */}
                {/* Add more menu items here */}
            </ul>
        </nav>
    );
};

export default Navbar;