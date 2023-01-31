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

      <main className="">
        <div className="flex w-full  justify-center  flex-wrap pt-10">
          <div className="p-8 rounded shadow-lg ring-1 ring-black ring-opacity-5">
            <h1 className="text-center text-5xl text-navy mb-4 font-bold">
              🚧 Site Under Construction 🚧
            </h1>
            <p className="text-center text-2xl text-turq-dark">
              {"We'll be back up soon"}
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
