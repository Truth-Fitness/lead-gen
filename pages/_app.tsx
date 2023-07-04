import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";
import Logo from "../components/Logo";
import NavbarContainer from "../components/Navbar";
function MyApp({ Component, pageProps, router }: AppProps) {
  if ([`/news`].includes(router.pathname)) {
    return (
      <div className="bg-turq">
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZQG9EXSZ30`}
          id="googleAnalytics1"
        />
        <Script strategy="lazyOnload" id="googleAnalytics2">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQG9EXSZ30', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
        <Head>
          <meta property="og:title" content="Truth Fitness News Letter" />
          <meta
            property="og:image"
            content="https://truthfitness.co.uk/news-og-image.jpeg"
          />
          <meta
            property="og:description"
            content="The Healthy Business Leader Newsletter"
          />
          <meta property="og:url" content="https://truthfitness.co.uk/news" />
        </Head>
        <Component {...pageProps} />
      </div>
    );
  }
  if ([`/ebook`, `/ebook_thank_you`].includes(router.pathname)) {
    return (
      <div>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZQG9EXSZ30`}
          id="googleAnalytics1"
        />
        <Script strategy="lazyOnload" id="googleAnalytics2">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQG9EXSZ30', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
        <Script id="hotjar-tracking">
          {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3395487,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
        <GoogleReCaptchaProvider
          reCaptchaKey="6LffzxUiAAAAAAnhLy-OrukIg8ZC-Ya3oho1hdf7"
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          <Head>
            <meta property="og:title" content="Truth Fitness Free E-Book" />
            <meta
              property="og:image"
              content="https://truthfitness.co.uk/og-ebook-image.png
              "
            />
            <meta
              property="og:description"
              content="Free E-Book - How to become a healthy business leader in 5 simple steps"
            />
            <meta
              property="og:url"
              content="https://truthfitness.co.uk/ebook"
            />
          </Head>

          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      </div>
    );
  }
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-71H30PPXJW`}
        id="googleAnalytics1"
      />
      <Script strategy="lazyOnload" id="googleAnalytics2">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-71H30PPXJW', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
      <Script id="hotjar-main">
        {`(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3461457,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `}
      </Script>
      <NavbarContainer />
      <GoogleReCaptchaProvider
        reCaptchaKey="6LffzxUiAAAAAAnhLy-OrukIg8ZC-Ya3oho1hdf7"
        scriptProps={{
          async: false,
          defer: false,
          appendTo: "head",
          nonce: undefined,
        }}
      >
        <div className=" m-auto">
          <Component {...pageProps} />
        </div>
      </GoogleReCaptchaProvider>
    </div>
  );
}

export default MyApp;
