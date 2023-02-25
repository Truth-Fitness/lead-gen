import { NextPage } from "next";
import EmailForm from "../components/EmailForm";

const News: NextPage = () => {
  return (
    <main className="max-w-[1200px] m-auto p-4">
      <div className="pt-10 md:pt-20 text-center max-w-3xl m-auto text-black font-bold font-impact">
        <h1 className=" text-2xl md:text-3xl ">The Health Business Leader</h1>
        <h2 className=" md:text-5xl text-4xl leading-[1.2] mt-2">
          {`IMPROVE YOUR HEALTH & INCREASE BUSINESS PERFORMANCE FAST`}
        </h2>
        <h3 className=" text-2xl md:text-3xl mt-8 mb-4">
          Join 3,000+ high performers in our weekly newsletter
        </h3>
        <EmailForm buttonColor={"black"} center buttonLabel="Subscribe" />
      </div>
    </main>
  );
};

export default News;
