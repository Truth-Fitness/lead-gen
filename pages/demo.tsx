import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MdCheck } from "react-icons/md";
import Excercise from "../components/Excercise";
import Call from "../components/Call";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import { useCookies } from "react-cookie";
import BookNow from "../components/BookNow";
import Carousel from "nuka-carousel";
import { useIntersection } from "../hooks/useIntersection";
import Popup from "../components/Popup";
import Router from "next/router";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import mainHero from "../public/bw-cameron-tony.jpeg";
import EmailForm from "../components/EmailForm";
import { TextContainer } from "../components/TextContainer";
import { Blob } from "../components/Blob";
import Presentation from "../components/Presentation";

const Home: NextPage = () => {
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

      <main>
        <div className="bg-gray-900 relative w-screen">
          <div className="flex items-center flex-wrap-reverse px-5 pt-10 pb-24 max-w-[1600px] m-auto">
            <div className="lg:w-6/12 w-full">
              <h1 className="text-4xl md:text-5xl font-bold  text-white my-4 md:mb-2">
                Unleashing the <span className="text-red">Top Five</span>{" "}
                Surprising Techniques for Rapid Weight Loss
              </h1>
              <p className="text-lg uppercase tracking-wider text-gray-300  mb-2">
                Discover how to:
              </p>
              <ol className="ml-8 list-decimal text-xl font-semibold  text-[#00c6c6]">
                <li>Transform Habits for Optimal Health</li>
                <li>Create Efficient Fat-Burning Workouts</li>
                <li>Strengthen Immunity and Vitality</li>
                <li>Fit workouts into an insane diary</li>
                <li>Achieve rapid results and maintain them forever</li>
              </ol>
              <p className="mt-6 max-w-2xl text-gray-200">
                Unlock the Key to a Healthier, Confident Life: The Six-Week
                Business Leader Transformation Training. Join the 400+ Business
                Leaders Who Have Transformed Their Lives with Our Proven
                Strategies.
              </p>
              <div className="w-full my-6">
                <EmailForm />
              </div>
              <ul className="flex gap-2  md:gap-4 items-center">
                <li className="flex items-center text-gray-300 gap-2">
                  <MdCheck className="text-red" />
                  <p>5 Secrets</p>
                </li>
                <li className="flex items-center text-gray-300 gap-2">
                  <MdCheck className="text-red" />
                  Get Our VIP Strategy
                </li>
                <li className="flex items-center text-gray-300 gap-2">
                  <MdCheck className="text-red" />
                  Clear Simple Effective
                </li>
              </ul>
            </div>
            <div className="lg:w-6/12 w-full grayscale">
              <div className="md:mx-3">
                <Image src={mainHero} alt="Picture of the author" />
              </div>
            </div>
          </div>
          <div className="custom-shape-divider-bottom-1675285807">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mt-10 md:mb-20 items-center p-4">
          <div className="w-full lg:w-5/12">
            <p className="text-red font-bold mb-5">
              FED UP WITH FEELING THIS WAY?
            </p>
            <h2 className="text-3xl text-turq font-bold mb-7">
              {`You have committed your life to the pursuit of business success. As long as you can remember, the business has been your main focus; 
              you are as driven as they come.`}
            </h2>
            <TextContainer>
              You are always busy running from meeting to meeting. The business
              has consumed your energy, time and focus for as long as you can
              remember. As a result, you sleep badly, travel too much and use
              alcohol and food to relax when you finally get a moment to rest.
            </TextContainer>
            <TextContainer>
              When you finally get home to see your family, you are exhausted
              and feel bad because you are never really there 100%. You just
              want to sit on the sofa and chill or catch up on emails.
            </TextContainer>
            <TextContainer>
              {`You have put on weight. You aren't sure how much because you’re
              too scared to check the scales. But you are acutely aware that
              your favourite suit and trousers don't fit and your belly gets
              bigger every time you look in the mirror.`}
            </TextContainer>
            <TextContainer>
              Your body constantly feels inflamed, and your back always aches.
              You are tired of feeling tired but don’t know where to turn for
              support that works!?
            </TextContainer>
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
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
