import { useState } from 'react';
import Link from 'next/link';
import styles from '@/components/Menu/Menu.module.css';
import { FaBars } from 'react-icons/fa';

const Menu = () => {

    const [isActive, setIsActive] = useState(false);

    const activeMenu = () => {
        setIsActive(!isActive);
        console.log(isActive);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.maxWidth}>
                <div className={styles.logo}>
                <Link href="/"><img src="/images/Jesus.png" alt="Amor e Salvação" /></Link>
                </div>
                <ul className={`${styles.menu} ${ isActive ? styles.active : "" }`} id={styles.menuSite}>
                    <li><Link href="/">Amor</Link></li>
                    <li><Link href="/salvacao">Salvação</Link></li>
                    <li><Link href="/contact">Contato</Link></li>
                </ul>
                <div className={styles.menuBtn} id={styles.menuBtn}>
                    <i id={styles.menuIcon} onClick={activeMenu}><FaBars /></i>
                </div>
            </div>
        </nav>
    );
}

export default Menu;