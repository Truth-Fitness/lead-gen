import { NextPage } from "next";
import { InlineWidget } from "react-calendly";
import { MdCheck } from "react-icons/md";

const Book: NextPage = () => {
  return (
    <main className="max-w-[1300px] m-auto flex flex-wrap px-6 mt-5 lg:mt-10">
      <div className="lg:w-1/2 w-full">
        <h1 className="text-5xl font-serif font-bold text-turq my-6">
          BOOK A CONSULT CALL
        </h1>
        <p className="text-lg">
          {`If you're keen to work with us you can book a consult call. We get busy
        with calls so please only book a call if you're committed to
        understanding more about how TRUTH®can help you achieve your goals.`}
        </p>
        <hr className="my-6"></hr>
        <h2 className="text-2xl font-bold my-4">With TRUTH® you get:</h2>
        <ul className="list-disc list-inside my-6 md:text-xl">
          <li className="flex items-center gap-4">
            <MdCheck className="text-turq h-8 w-8" />
            Healthy rapid weightloss
          </li>
          <li className="flex items-center gap-4">
            <MdCheck className="text-turq h-8 w-8" />
            Guaranteed results
          </li>
          <li className="flex items-center gap-4">
            <MdCheck className="text-turq h-8 w-8" />
            Lasting knowledge
          </li>
        </ul>
      </div>
      <div className="grow">
        <InlineWidget
          url="https://calendly.com/truth-fit/call"
          styles={{
            height: "1400px",
          }}
        />
      </div>
    </main>
  );
};

export default Book;
