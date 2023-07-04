import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import testimonials from "../data/testimonials.json";
import { TestimonialCard } from "../components/TestimonialCard";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Truth Fitness - Testimonials</title>
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

      <main className="bg-slate-50">
        <div className="relative max-w-6xl m-auto">
          <h2 className="text-6xl text-center font-bold font-impact pt-20 pb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-8 mx-4 ">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mx-4 ">
            <div className="p-4 rounded shadow ring-1 ring-black ring-opacity-5">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/-TiugingDko"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            </div>
            <div className="p-4 rounded shadow ring-1 ring-black ring-opacity-5">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/zJo5OYvfNro"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  mt-8 mx-4 ">
            {testimonials.slice(3).map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
