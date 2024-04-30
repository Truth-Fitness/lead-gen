import { NextPage } from "next";
import { InlineWidget } from "react-calendly";
import { MdCheck } from "react-icons/md";

const Book: NextPage = () => {
  return (
    <div className="bg-truth-dark-green">
      <main className="max-w-[1300px] m-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pt-5 lg:pt-10 text-white">
        <div className="">
          <h1 className="text-4xl tracking-wide font-semibold text-white my-6">
            BOOK A CONSULT CALL
          </h1>
          <p className="text-lg">
            {`If you're keen to work with us you can book a consult call. We get busy
        with calls so please only book a call if you're committed to
        understanding more about how TRUTH®can help you achieve your goals.`}
          </p>
          <hr className="my-6"></hr>
          <h2 className="text-2xl font-bold uppercase my-4">
            With TRUTH® you get:
          </h2>
          <ul className="list-disc list-inside my-6 md:text-xl">
            <li className="flex items-center gap-4">
              <MdCheck className="text-turq h-6 w-6" />
              Healthy rapid weightloss
            </li>
            <li className="flex items-center gap-4">
              <MdCheck className="text-turq h-6 w-6" />
              Guaranteed results
            </li>
            <li className="flex items-center gap-4">
              <MdCheck className="text-turq h-6 w-6" />
              Lasting knowledge
            </li>
          </ul>
        </div>
        <div className="shadow">
          <InlineWidget
            url="https://calendly.com/truth-fit/call"
            styles={{
              height: "1400px",
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default Book;
