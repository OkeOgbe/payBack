import React from 'react';
import styles from '../../styles/Home.module.css';
import OptImg from '../Reusables/OptImg';
import Link from 'next/link'

const HeroBanner = () => {
    return (
        <div>
            <div className={styles.hero}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div
                                className={`text_is_white alignOnly sectionHeight +${styles.heroTextHolder}`}>
                                <div>
                                    <h2 className="sectionHead">Keep Track Of Your Loans With Payback.</h2>
                                    <p className="sectionText mt-3">Payback is a lightweight project aimed at
                                        helping entrepreneurs and companies keep track of loans lent out to customers.
                                    </p>
                                    <div className="btnHolder pt-3">
                                        <Link href='/register'>
                                            <a className="btn--whiteBorder">Register</a>
                                        </Link>
                                        <Link href='/login'>
                                            <a className='text_is_white ml-3'>Login</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.heroImgHolder}>
                                <OptImg src='heroImg.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;