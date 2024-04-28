import Link from "next/link";
//https://calendly.com/truth-fit/initialcall
export const CalendlyLink = () => {
  return (
    <Link href="/book">
      <div className="inline-block px-6 py-2.5 text-white bg-gradient-to-br from-truth-light-green from-0% to-truth-dark-green to-100% via-truth-mid-green via-40% rounded-lg shadow-lg  text-lg leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer">
        Book a call
      </div>
    </Link>
  );
};
