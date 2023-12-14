// components/subbanner.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './homepage.module.css';

const Banner = () => {
    return (
        <div className={styles.themodo}>
            <h1> When you buy, Number Go Up!. <br/> When you sell, Number Go Up! <br/> When you do nothing, Number Go Up! </h1> 
        </div>
    );
};

export default Banner;