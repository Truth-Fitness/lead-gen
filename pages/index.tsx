import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
//import { MdCheck } from "react-icons/md";
import React from "react";
//import EmailForm from "../components/EmailForm";
import { TextContainer } from "../components/TextContainer";
import { Blob } from "../components/Blob";
import Presentation from "../components/Presentation";
import Feature from "../components/Feature";
import features from "../public/features.json";
import ResultsComparison from "../components/ResultsComparison";
//import { CldImage } from "next-cloudinary";
import { CalendlyLink } from "../components/CalendlyLink";
import FAQ from "../components/FAQ";
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TRUTH Fitness - The home of human-first fitness.</title>
        <meta
          name="description"
          content="Our mission is to help people achieve their goals and live healthier, happier lives by providing expert guidance and inspiration in nutrition, fitness, and habit optimisation."
        />
        <meta
          name="keywords"
          content="fitness, health, nutrition, habit optimisation, personal training"
        />
        <meta
          property="og:title"
          content="TRUTH Fitness - The home of human-first fitness."
        />
        <meta
          property="og:description"
          content="Our mission is to help people achieve their goals and live healthier, happier lives by providing expert guidance and inspiration in nutrition, fitness, and habit optimisation."
        />
        <meta property="og:url" content="https://truthfitness.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="TRUTH Fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="activatePixel">{`fbq('track', 'ViewContent');`}</Script>

      <main>
        {/* <div className="bg-truth-dark-green relative w-screen">
          <div className="flex items-center flex-wrap-reverse px-5 pt-10 pb-24 max-w-[1600px] m-auto gap-4 justify-around">
            <div className="lg:w-6/12 w-full">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-wide  text-white my-4 md:mb-2 uppercase">
                Unleashing the <span className="text-red">Top Five</span> Steps
                to Becoming a Healthy Business Leader
              </h1>
              <p className="text-lg uppercase tracking-wider text-white mb-2">
                Discover how to:
              </p>
              <ol className="ml-8 list-decimal text-xl   text-white">
                <li>
                  How to become a healthy business leader in five simple steps
                </li>
                <li>How to lose weight + boost immunity</li>
                <li>How to improve sleep and skyrocket your energy</li>
              </ol>
              <p className="mt-6 max-w-2xl text-white uppercase text-2xl ">
                Download your free ebook now
              </p>
              <div className="w-full my-6">
                <EmailForm />
              </div>
              <ul className="flex gap-2  md:gap-4 items-center text-white">
                <li className="flex items-center gap-2">
                  <MdCheck className="text-red" />
                  <p>5 Secrets</p>
                </li>
                <li className="flex items-center  gap-2">
                  <MdCheck className="text-red" />
                  Get Our VIP Strategy
                </li>
                <li className="flex items-center  gap-2">
                  <MdCheck className="text-red" />
                  Clear Simple Effective
                </li>
              </ul>
            </div>
            <div className="lg:w-5/12 w-full ">
              <div className="md:mx-3  ">
                <CldImage
                  src="truth-lead-gen/imageedit_2_9721529056_xhonbq"
                  alt="Ebook"
                  height={"600px"}
                  width={"425px"}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center flex-wrap pt-10 md:mb-20 items-center p-4">
          <div className="w-full lg:w-5/12">
            <p className="text-truth-mid-green font-bold mb-5">
              FED UP WITH FEELING THIS WAY?
            </p>
            <h2 className="text-3xl text-truth-dark-green font-bold mb-7">
              {`You're fully dedicated to achieving business success and have been relentlessly focused on it for as long as you can remember.`}
            </h2>
            <TextContainer>
              Your busy schedule, consumed by business, leaves you with little
              time to rest. You struggle with poor sleep, excessive travel, and
              rely on alcohol and food to unwind.
            </TextContainer>
            <TextContainer>
              You feel guilty when spending time with your family because
              exhaustion leaves you unable to be fully present, often opting to
              relax on the couch or catch up on emails instead.
            </TextContainer>
            <TextContainer>
              {`You've gained weight, which is evident by how your favourite
              clothes no longer fit, and your belly seems to expand each time
              you see yourself in the mirror. You're too scared to check the
              scale to know the exact amount.`}
            </TextContainer>
            <TextContainer>
              Your body constantly feels inflamed, and your back always aches.
              You are tired of feeling tired but don’t know where to turn for
              support that works!?
            </TextContainer>
            <div className="flex justify-center">
              <CalendlyLink />
            </div>
          </div>
          <div className="relative mb-10">
            <Blob className="w-[350px] md:w-[600px]" />
            <div className="absolute top-10 left-40 md:left-60 rounded-2xl overflow-hidden">
              <Image
                src="/result1.jpg"
                alt="Picture of the author"
                height={320}
                width={350}
                objectFit="cover"
                style={{ borderRadius: "1rem" }}
              />
            </div>
            <div className="absolute top-40 md:top-60 md:left-20 right-20 left-10 rounded-2xl overflow-hidden">
              <Image
                src="/result2.jpg"
                alt="Picture of the author"
                height={320}
                width={350}
                objectFit="cover"
                style={{ borderRadius: "1rem" }}
              />
            </div>
          </div>
          <div className="w-full md:w-9/12 p-4 my-6">
            <Presentation />
          </div>
          <div className="max-w-[1300px]">
            <h2 className="text-4xl font-bold text-navy text-center my-4">
              THE SIX-WEEK RAPID RESULT SYSTEM{" "}
            </h2>
            <p className="text-center mb-6 mx-6 text-lg">
              Transform Your Body, your health and your confidence with TRUTH
              Fitness®️.
              <br />
              <br />
              Get ready for real results with our comprehensive, user-friendly
              system. Our expert team provides the tools and resources to track
              progress, stay motivated, and reach your fitness goals in six
              weeks. Join us now and experience the TRUTH Fitness®️ difference
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3  gap-4 ">
              {features.map((feature, index) => (
                <Feature key={feature.id} {...feature} index={index + 1} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <CalendlyLink />
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-t from-truth-dark-green to-truth-light-green">
          <div className="flex justify-center ">
            <div className="max-w-[1300px]">
              <h2 className="text-3xl font-bold text-white text-center mt-20 mx-2 uppercase">
                Rapid, Sustainable Results for Business Owners and Senior
                Executives
              </h2>
              <div className="flex md:flex-nowrap flex-wrap mt-10 justify-between mx-4 gap-4">
                {/* <ReactPlayer
                    url=""
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0"
                    playing={true}
                  /> */}
                <div className="w-full flex items-center">
                  <div className="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/-TiugingDko"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title="video"
                    />
                  </div>
                </div>

                <div className="p-8 w-full md:w-6/12 lg:mt-10 mt-10 shrink-0">
                  <blockquote className="text-white ">
                    {`As a Founder and CEO of 2 companies, when I first reached
                    out to Cameron and his team at TRUTH, I was dubious about
                    how I would fit the Rapid Result System into my very busy
                    daily schedule. I'm pleased to say that my concerns were
                    unfounded. The team were excellent and flexible, and the
                    coaching worked around my diary. As a result, I feel much
                    healthier and fitter than I have been in the past 25 years, so
                    a big thank you to the TRUTH team, and long may it continue.`}
                  </blockquote>
                  <div className="mt-4 flex items-center gap-4">
                    <Image
                      src="/mark_headshot.jpg"
                      alt="Picture of the author"
                      height={60}
                      width={60}
                      objectFit="cover"
                      style={{ borderRadius: "50%" }}
                    />
                    <p className="text-sm text-slate-200 ">
                      Mark Balaam
                      <br /> CEO and Founder Sarax and Imabi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 md:mt-16 max-w-[1300px] m-auto flex justify-center">
            <CalendlyLink />
          </div>

          <div className="py-5 md:py-10">
            <ResultsComparison />
            <div className=" mt-5 md:mt-8 max-w-[1300px] m-auto flex justify-center">
              <CalendlyLink />
            </div>
          </div>
        </div>
        <div className="max-w-[1300px] m-auto py-8">
          <h2 className="text-4xl font-bold text-truth-dark-green text-center my-4 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-5 my-8 px-4">
            <FAQ
              question="Q1. I am out of shape and I haven't exercised for years, am I going to be able to do the programme?"
              answer="We specialise in 40 plus business leaders and have years of experience in working with people that have let their health and fitness diminish. Everything we do is bespoke from your workouts, to nutrition and accountability so that it is challenging but a manageable."
            />
            <FAQ
              question="Q2. I am always traveling with work, can I get results with your system?"
              answer="The Rapid Result System has been built to be extremely flexible. It is delivered online through our app, video calls and our chat system so as long as you have Wi-Fi the programme follows you. Also, no matter where you are staying or working out, we will guide you."
            />
            <FAQ
              question="Q3. I have tried lots of programmes before but nothing has worked, how do I know this will?"
              answer="We have worked and got results with over 400 of the UK's business elite. We are so confident in our system that we attach a results guarantee to all of our programmes."
            />
            <FAQ
              question="Q4. Is your programme 121?"
              answer="We have a range of programmes that fit every need. We have our Prestige 121 programme and our small group programme. Cam will advise you on the best version for you and your needs."
            />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
