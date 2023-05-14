import { NextPage } from "next";
import { useEffect } from "react";
import {
  MdLocalBar,
  MdRestaurant,
  MdSmartDisplay,
  MdTakeoutDining,
} from "react-icons/md";
import MdNutrition from "../components/NutritionIcon";

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
    <div className="max-w-[1100px] m-auto">
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

            <p className="my-2 text-lg font-medium">
              {`The Healthy Business Leader Success Bundle includes everything
                you need to achieve your health and business goals, including:`}
            </p>
            <div className="flex flex-wrap justify-center">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`w-full md:w-1/2 flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } justify-center items-center p-4 gap-8`}
                >
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-turq flex items-center justify-center text-white text-3xl md:text-4xl font-bold shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-navy md:text-lg">
                    <span className="font-bold">{item.title}</span> -{" "}
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
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
          </div>
        </div>

        {/* <div className="mb-6">
          <h2 className="text-3xl text-center font-bold">
            What people say about TRUTH…
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center mt-8 mx-4 ">
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ThanksPage;
