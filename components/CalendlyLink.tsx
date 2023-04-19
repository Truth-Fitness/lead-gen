import Link from "next/link";
//https://calendly.com/truth-fit/initialcall
export const CalendlyLink = () => {
  return (
    <Link href="/book">
      <div className="inline-block px-6 py-2.5 text-white bg-gradient-to-tl from-navy to-turq hover:to-turq-dark rounded-lg shadow-lg font-bold text-lg leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer">
        Book a call
      </div>
    </Link>
  );
};
