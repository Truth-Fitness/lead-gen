import { NextPage } from "next";
import { useEffect } from "react";
import {
  MdLocalBar,
  MdRestaurant,
  MdSmartDisplay,
  MdTakeoutDining,
} from "react-icons/md";
import MdNutrition from "../components/NutritionIcon";
import BuyNowButton from "../components/BuyNowButton";
import { TestimonialCard } from "../components/TestimonialCard";
import testimonials from "../data/testimonials.json";

type Item = {
  icon: React.ReactNode;
  text: string;
  title: string;
};

const items: Item[] = [
  {
    text: "this guide means that you can navigate social events, client meetings and weekends without derailing your results. Often times alcohol makes you fall off of the wagon. Having a simple guide on the best options makes this a thing of the past. ",
    title: "The TRUTH Alcohol Guide",
    icon: <MdLocalBar className=" text-white" />,
  },
  {
    title: "The TRUTH Grab and Go Guide",
    text: "you’re in between meetings, you have 15 mins and you are hungry; instead of grabbing a TESCO meal deal, open this simple guide and discover healthy options within walking distance from your office.",
    icon: <MdTakeoutDining className=" text-white" />,
  },
  {
    title: "The TRUTH Restaurant Guide",
    text: "you love eating out, but you would also love to lose the belly and feel more energy. This guide enables you to navigate any restaurant situation with simple advice on better options.",
    icon: <MdRestaurant className=" text-white" />,
  },
  {
    title: "The TRUTH Nutrition Guide",
    text: "a simple guide to help you understand the fundamentals of dropping fat, increasing energy and building better health.",
    icon: <MdNutrition className=" text-white" />,
  },
  {
    title: "A Video Training on Becoming a Healthy Business Leader",
    text: "our flagship training video walks you through every step of our five pillar process so that you gain more clarity on how to build your own successful programme.",
    icon: <MdSmartDisplay className=" text-white" />,
  },
];

const ThanksPage: NextPage = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <div className="max-w-[1440px] m-auto">
      <div className="mx-4 my-6">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/-TiugingDko"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </div>

        <div className="my-8">
          <h1 className="text-xl md:text-2xl text-center font-bold text-navy uppercase">
            Introducing the Healthy Business Leader Success Bundle{" "}
            <span className="text-turq block text-3xl md:text-4xl normal-case font-bold mt-1">
              Your Key to Achieving Optimal Health and Business Success!
            </span>
          </h1>
          <div className="mt-6">
            <div className="max-w-5xl m-auto text-center">
              <p className="my-2 text-lg font-medium">
                {`Congratulations on taking the first step towards becoming a
                healthier business leader with our free ebook "How to Become a
                Healthy Business Leader in Five Simple Steps." We hope you've
                found it informative and useful on your health journey.`}
              </p>
              <p className="my-2 text-lg font-medium">
                {`Now, we want to take things to the next level and offer you the
                opportunity to access our Healthy Business Leader Success
                Bundle. This one-time offer is exclusively available to you as a
                thank-you for downloading our ebook.`}
              </p>

              <p className="my-2 text-lg font-semibold mt-6">
                {`The Healthy Business Leader Success Bundle includes everything
                you need to achieve your health and business goals, including:`}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`w-full flex ${
                    index % 2 === 0
                      ? "md:flex-row mr-auto"
                      : "md:flex-row-reverse ml-auto"
                  }  items-center p-6 gap-6  max-w-[900px] `}
                >
                  <div
                    className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-turq flex items-center justify-center text-white text-3xl md:text-4xl font-bold shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-navy text-lg md:text-xl">
                    <span className="font-bold">{item.title}</span> -{" "}
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-4xl m-auto">
              <p className="my-6 text-lg font-medium">
                {`These resources are specifically designed to help busy business
              leaders like you make healthy choices, regardless of your hectic
              schedule. With our comprehensive guides and video training, you'll
              have all the tools you need to take control of your health and
              succeed in business.`}
              </p>
              <p className="my-4 text-lg font-medium">
                {`Now, we know you're probably wondering about the cost. If you were
              to purchase each of these resources separately, it would cost you
              over £150. But for a limited time, we're offering you the
              opportunity to grab the entire Healthy Business Leader Success
              Bundle for just `}
                <span className="font-bold"> {`£17!`}</span>
              </p>
              <div className="flex justify-center my-8">
                <BuyNowButton />
              </div>
              <p className="my-6 text-lg font-medium">
                {`That's right - for less than the cost of a meal out, you can have
              access to all the tools and resources you need to achieve optimal
              health and business success. And if you're not completely
              satisfied with your purchase, we offer a`}
                <span className="font-bold">
                  {" "}
                  {`30-day money-back
              guarantee`}
                </span>
                {`. So you can try the Healthy Business Leader Success
              Bundle risk-free.`}
              </p>
              <p className="my-6 text-lg font-medium">
                {`Don't miss out on this exclusive opportunity to take your health
              and business to the next level. Click the button above to add the
              Healthy Business Leader Success Bundle to your order now!`}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-3xl text-center font-bold">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center mt-8 mx-4 ">
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>
        <div className="flex justify-center my-10">
          <BuyNowButton />
        </div>
      </div>
    </div>
  );
};

export default ThanksPage;
