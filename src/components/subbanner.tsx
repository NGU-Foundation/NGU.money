// components/subbanner.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './homepage.module.css';

const Banner = () => {
    return (
        <div className={styles.themodo}>
            <h1 className={styles.modotext}> You buy, Number Go Up. <br/> You sell, Number Go Up. <br/> When you do nothing, Number Go Up. </h1> 
            <br/>
            <h2 className={styles.modoayintext}> <Link href="https://www.ayin.app/swap"> Click here and buy NGU now! </Link></h2>
        </div>
    );
};

export default Banner;