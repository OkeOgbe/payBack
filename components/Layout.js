import Head from 'next/head';

const Layout = ({title}) => {
    return (
        <Head>
            <title>Payback - {title}</title>
            <meta
                name="description"
                content="Payback is a mini web app aimed at helping you keep track of customers who are yet to pay for your services"/>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
    )
}

export default Layout;