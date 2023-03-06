import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import { useEffect } from "react";
import Script from "next/script";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
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
          <Component {...pageProps} />
        </GoogleReCaptchaProvider>
      </div>
    );
  }
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
      <nav className="navbar navbar-expand-lg shadow-lg py-2 bg-gray-800 relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/logo-white.png"
              alt="logo"
              width={120}
              height={45}
              objectFit="contain"
            />
          </div>
        </div>
      </nav>
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
