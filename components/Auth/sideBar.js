import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Auth.module.css';
import OptImg from '../Reusables/OptImg';

const SideBar = ({Header, SubHeader}) => {
    return (
        <div>
            <div className={styles.sideBarHolder}>
               <div className="alignOnly sectionHeight">
                   <div className="text_is_white">
                        <h2 className="sectionHead--mid text_is_bold">{Header}</h2>
                        <p className="sectionText mt-3">{SubHeader}</p>
                        <p>Or you rather <Link href='/'><a style={{ color: 'cornflowerblue' }}>GO BACK HOME</a></Link></p>
                   </div>
               </div>
               <img src='images/bgDots.png'  className={styles.sideBarDots}/>
            </div>
        </div>
    )
}

export default SideBar;
