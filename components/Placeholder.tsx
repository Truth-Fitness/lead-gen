import Logo from "./Logo";
import Image from "next/image";

export const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-truth-dark-green">
      <div className="fixed top-4 left-10">
        <Logo className="h-[130px] w-[130px]" />
      </div>
      <main className="grid grid-cols-1 md:grid-cols-2 max-w-6xl m-auto px-8 gap-8">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="md:mt-[-50px] -mt-[30vh]">
            <h1 className="text-5xl font-semibold text-white uppercase serif tracking-wide mb-2">
              Hey,
            </h1>
            <h1 className="text-5xl font-extralight text-white uppercase serif tracking-wide ">
              {`We're working on our exiting new website`}
            </h1>
            <h2 className="text-3xl font-light text-white uppercase serif tracking-wide mt-4">
              Check back soon
            </h2>
          </div>
        </div>
        <Image
          className=" md:ml-[40vw]  md:mt-[0] mt-[30vh]"
          src="/pattern.svg"
          alt="pattern"
          layout="fill"
        />
      </main>
    </div>
  );
};
