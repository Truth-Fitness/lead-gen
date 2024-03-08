import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";

import NavbarContainer from "../components/Navbar";
//import { MaintenancePage } from "../components/Placeholder";
function MyApp({ Component, pageProps, router }: AppProps) {
  //if (true) {
  //  return <MaintenancePage />;
  //}
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
        <Script id="pixel">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '470164566879882');
fbq('track', 'PageView');`}
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
        <Script id="pixel">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '470164566879882');
fbq('track', 'PageView');`}
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
      <Script id="pixel">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '470164566879882');
fbq('track', 'PageView');`}
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
