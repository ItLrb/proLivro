import React from 'react';
import styles from './Header.module.css'
import { FaHouse, FaCircleQuestion, FaPhone } from "react-icons/fa6";
import logo from '../img/logo_LivroPro.jpg'


function Header() {
    return (
    <>
        <header>
        <div className={styles.logo}>
            <img className={styles.logoImg} src={logo} alt="LivroPro Logo" />
        </div>
        <nav>
            <ul>
                <li><a href="#searchInput"><FaHouse /></a></li>
                <li><a href="#sobre"><FaCircleQuestion /></a></li>
                <li><a href="#footer"><FaPhone /></a></li>
            </ul>
        </nav>
        </header>
    </>
    )
}

export default Header