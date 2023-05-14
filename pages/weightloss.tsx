import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Popup from "../components/Popup";
import Router from "next/router";

const Weightloss: NextPage = () => {
  const [popup, setPopup] = useState(false);
  const [cookies] = useCookies(["enrolled"]);

  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  useEffect(() => {
    if (cookies.enrolled) {
      Router.push("/video");
    }
  }, [cookies]);

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
        <meta property="og:image" content="weightloss-og-image.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {<Popup setPopup={setPopup} popup={popup} />}
        <div className=" bg-navy">
          <div className="flex items-center justify-center">
            <div className="flex h-full max-w-5xl">
              <div className="text-center text-white px-6 md:px-12 w-full mt-10">
                <h1 className="text-5xl font-bold">
                  Top Five Secrets to Rapid Weightloss
                </h1>
                <h2 className="text-2xl mt-4">
                  Revealing the five rapid weightloss secrets personal trainers
                  dont want you to know
                </h2>
                <section className="flex flex-wrap items-center gap-6 mt-8">
                  <div className="md:text-left md:w-7/12 ">
                    <h3 className="text-xl font-bold">
                      The Five Secrets to rapid weightloss training will help
                      you to finally lose weight, improve your health and boost
                      your body confidence
                    </h3>
                    <p className="w-full mt-6">In the training you’ll learn:</p>
                    <ul className="specialtick ml-4 mt-2">
                      <li className="my-2">
                        {" "}
                        Improve your health through better habits
                      </li>
                      <li className="my-2">
                        {" "}
                        Effortlessly build fat burning workouts
                      </li>
                      <li className="my-2">
                        {" "}
                        Increase your immunity and strength
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Image
                      src="/bgimage.webp"
                      alt="placeholder"
                      height={260}
                      width={330}
                    />
                  </div>
                </section>
                <div className="my-10">
                  <h3 className="text-xl font-bold">
                    In this training we’re going to show you the same key
                    strategies that we use to help 400+ business leaders, live
                    healthier more confident lives in just six weeks
                  </h3>
                  <button
                    className="px-6 py-3 bg-turq hover:bg-turq-dark text-white font-bold rounded shadow text-3xl mt-5 hover:text-gray-50"
                    onClick={() => setPopup(true)}
                  >
                    Watch The Training
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Weightloss;
