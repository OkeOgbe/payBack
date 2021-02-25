import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css';
import OptImg from '../components/Reusables/OptImg';
import HeroBanner from '../components/Home/heroBanner';
import Benefits from '../components/Home/benefits';

export default function Home() {
    return (
        <div>
            <Layout title="Home"/>
            <HeroBanner/>
            <Benefits/>
        </div>
    )
}
