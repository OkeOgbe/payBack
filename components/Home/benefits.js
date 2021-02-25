import React from 'react';
import styles from '../../styles/Home.module.css';
import OptImg from '../Reusables/OptImg';

const Benefits = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={styles.heroImgHolder}>
                            <OptImg src='benefitImg.png'/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="benefitsTextHolder sectionHeight alignOnly">
                            <div>
                                <h2 className="sectionHead text_is_purple">Why Payback?</h2>
                                <p className="sectionText">Peer-to-peer loans in this part of the
                                    country are hard to keep track of as they usually constitute of your friends
                                    and family. Payback simply helps you keep track of how much money goes out to
                                    whom.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits;
