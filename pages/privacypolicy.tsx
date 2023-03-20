import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const paragraphStyle = "my-4";
  return (
    <div>
      <Head>
        <title>Truth Fitness</title>
        <meta
          name="description"
          content="Top Five Secrets to Rapid Weightloss"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta
          property="og:title"
          content="Personal Training for Business Leaders · TRUTH Fitness"
        />
        <meta
          property="og:description"
          content="Experts in Personal Training for Business Leaders, Senior Executives and their teams. Book a FREE strategy call with our expert Personal Trainers · TRUTH® Fitness"
        />
        <meta property="og:url" content="https://truthfitness.co.uk/" />
        <meta property="og:site_name" content="TRUTH Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl m-auto">
        <div className="flex w-full  justify-center  flex-wrap md:pt-5 lg:pt-10">
          <div className="p-8 rounded shadow-lg ring-1 ring-black ring-opacity-5">
            <h1 className="text-center text-5xl text-navy mb-4 font-bold">
              Privacy Policy
            </h1>
            <p className={paragraphStyle}>
              CT COACHING LTD is committed to protecting the privacy of its
              users. When you provide us with your name and email address when
              registering for our online linked live event, we collect this
              information to provide you with marketing materials about our
              products and services.
            </p>
            <p className={paragraphStyle}>
              We will never sell your personal information to third parties.
              However, we may share your name and email address with our trusted
              third-party partners who provide us with marketing services.
            </p>
            <p className={paragraphStyle}>
              {`You have the right to opt out of receiving our marketing
                materials at any time. You can do this by clicking the
                'unsubscribe' link at the bottom of any marketing email we send
                you or by contacting us directly.`}
            </p>
            <p className={paragraphStyle}>
              If you have any questions or concerns about our privacy policy,
              please contact us at info@truthfitness.co.uk
            </p>
            <p className={paragraphStyle}>
              By providing us with your name and email address, you agree to the
              terms of this privacy policy.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
