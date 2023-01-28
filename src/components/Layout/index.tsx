import { ContextThemeProvider } from '@contexts/Theme';
import { Roboto } from '@next/font/google';
import { GlobalStyle } from '@styles/global';
import Head from 'next/head';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700', '900'] });

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className={roboto.className}>
      <ContextThemeProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="alternate"
            href="https://www.wendson.com.br/en"
            hrefLang="en"
          />
          <link
            rel="alternate"
            href="https://www.wendson.com.br/pt-br"
            hrefLang="pt-br"
          />
          <link
            rel="alternate"
            href="https://www.wendson.com.br/en"
            hrefLang="x-default"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <meta name="title" content="Wendson Sousa - Front-end Developer" />
          <meta
            name="description"
            content="Front-end Developer specialized in React JS and React Native with typescript
  "
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.wendson.com.br/" />
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
            content="https://www.wendson.com.br/logo.png"
          />
          <meta
            property="og:image:secure_url"
            itemProp="image"
            content="https://www.wendson.com.br/logo.png"
          />
          <meta property="og:image:width" content="93" />
          <meta property="og:image:height" content="48" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.wendson.com.br/" />
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
            content="https://www.wendson.com.br/logo.png"
          />
          ;
          <meta property="twitter:image:width" content="93" />
          <meta property="twitter:image:height" content="48" />
        </Head>

        {children}

        <GlobalStyle />
      </ContextThemeProvider>
    </div>
  );
}
