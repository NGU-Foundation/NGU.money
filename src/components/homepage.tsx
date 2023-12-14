// components/homepage.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component
import styles from './homepage.module.css';

// Sub Components
import Banner from './subbanner';
import Navbar from './navbar';

const HomePage = () => {
    return (
        <body>
            <Navbar></Navbar>
            <Banner></Banner>
        </body>
    );
};

export default HomePage;