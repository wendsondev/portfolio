import { ContextThemeProvider } from '@contexts/Theme';
import { Roboto } from '@next/font/google';
import { GlobalStyle } from '@styles/global';
import Head from 'next/head';
import { Footer } from '../Footer';
import { Header } from '../Header';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] });

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={roboto.className}>
      <ContextThemeProvider>
        <Head>
          <title>Wendson Sousa - Front-end Developer</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="alternate"
            href="https://www.wendsondev.com/en"
            hrefLang="en"
          />
          <link
            rel="alternate"
            href="https://www.wendsondev.com/pt-br"
            hrefLang="pt-br"
          />
          <link
            rel="alternate"
            href="https://www.wendsondev.com/en"
            hrefLang="x-default"
          />
          <link
            rel="icon"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="96x96"
            href="favicon/favicon-96x96.png"
            type="image/png"
          />
          <link
            rel="icon"
            sizes="192x192"
            href="favicon/favicon-192x192.png"
            type="image/png"
          />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="favicon/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="favicon/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="favicon/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="favicon/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="favicon/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="favicon/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="favicon/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="favicon/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-icon-180x180.png"
          />

          <meta name="title" content="Wendson Sousa - Front-end Developer" />
          <meta
            name="description"
            content="Front-end Developer specialized in React JS and React Native with typescript"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.wendsondev.com/" />
          <meta
            property="og:title"
            content="Wendson Sousa - Front-end Developer ReactJS"
          />
          <meta
            property="og:description"
            content="Front-end Developer specialized in React JS and React Native with typescript"
          />
          <meta
            property="og:image"
            content="https://www.wendsondev.com/share-image.jpg"
          />
          <meta
            property="og:image:secure_url"
            itemProp="image"
            content="https://www.wendsondev.com/share-image.jpg"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.wendsondev.com/" />
          <meta
            property="twitter:title"
            content="Wendson Sousa - Front-end Developer"
          />
          <meta
            property="twitter:description"
            content="Front-end Developer specialized in React JS and React Native with typescript"
          />
          <meta
            property="twitter:image"
            content="https://www.wendsondev.com/share-image.jpg"
          />
        </Head>

        <Header />

        {children}

        <Footer />

        <GlobalStyle />
      </ContextThemeProvider>
    </div>
  );
}
