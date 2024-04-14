import { NextPage } from "next";
import EmailForm from "../components/EmailForm";
import { TestimonialCard } from "../components/TestimonialCard";
import testimonials from "../data/testimonials.json";
import Logo from "../components/Logo";

const News: NextPage = () => {
  return (
    <main className="max-w-[1200px] m-auto p-4 relative">
      <div className="absolute top-4 sm:left-10 left-1/2 transform -translate-x-1/2">
        <Logo className="h-[100px] w-[100px] sm:h-[130px] sm:w-[130px]" />
      </div>
      <div className="pt-32 md:pt-20 text-center max-w-3xl m-auto text-white">
        <h1 className="text-xl md:text-3xl font-semibold text-white uppercase tracking-wide mb-2">
          The Healthy Business Leader
        </h1>
        <h2 className="text-3xl sm:text-5xl font-extralight text-white uppercase serif tracking-wide mt-6 ">
          {`IMPROVE YOUR HEALTH & INCREASE BUSINESS PERFORMANCE FAST`}
        </h2>
        <h3 className=" text-2xl md:text-3xl mt-8 mb-4">
          Join 3,000+ high performers in our weekly newsletter
        </h3>
        <EmailForm
          buttonColor={"green"}
          center
          buttonLabel="Subscribe"
          redirect
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 content-center mt-8">
        {testimonials.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial.id} />
        ))}
      </div>
    </main>
  );
};

export default News;
