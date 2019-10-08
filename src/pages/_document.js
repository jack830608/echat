import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';
import Hotjar from '../lib/hotjar'
export default class MyDocument extends Document {
    static getInitialProps({ renderPage}) {
        const sheet = new ServerStyleSheet()
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
        const styleTags = sheet.getStyleElement()
        return {
            ...page,
            styleTags,
        }
    }
    render() {
        const {
            styleTags,
        } = this.props;
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0" />
                    <meta property="og:site_name" content="Echat" />
                    <meta property="og:title" content="Echat" />
                    <meta property="og:description" content="Echat限時聊天室，現實且私密" />
                    <meta property="og:image" content={`/images/logo.png`} />
                    <link href="https://fonts.googleapis.com/css?family=Gugi|Hind+Siliguri|Noto+Sans+TC&display=swap" rel="stylesheet" />
                    <link rel="Shortcut Icon" type="image/x-icon" href={`/images/favicon.ico`} />
                    <link rel="apple-touch-icon" href={`https://jojo.cool/images/jo_red.png`} />
                    <link rel="apple-touch-icon" sizes="152x152" href={`/images/logo_152.png`} />
                    <link rel="apple-touch-icon" sizes="180x180" href={`/images/logo_180.png`} />
                    <link rel="apple-touch-icon" sizes="167x167" href={`/images/logo_167.png`} />
                    <link rel="manifest" href={`/manifest.json`} />
                    <title>Echat - 限時聊天室</title>
                    {styleTags}
                </Head>
                <body style={{ margin: 0, fontFamily: "'Noto Sans TC','Hind Siliguri', sans-serif" }}>
                    <Hotjar/>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}