import Router from "next/router";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { MdClose } from "react-icons/md";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function EbookPopup({
  setPopup,
  popup,
}: {
  setPopup: (value: boolean) => void;
  popup: boolean;
}) {
  const [, setCookie] = useCookies(["signedUpEbook"]);
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    "https://truthfitness.us17.list-manage.com/subscribe/post?u=d195bca7b15b09591a2869256&amp;id=12ff7a1116&amp;v_id=4713&amp;f_id=005150e0f0"
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    tags: "6585241,6585285",
  });

  useEffect(() => {
    if (success) {
      setCookie("signedUpEbook", true);
      Router.push("/ebook_thank_you");
      setPopup(false);
    }
  }, [setCookie, setPopup, success]);

  const inputStyle =
    "form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-turq focus:outline-none w-full";
  if (popup) {
    return (
      <div
        id="myModal"
        className="fixed z-50 pt-[100px] left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-40"
      >
        <div className="bg-white m-auto p-5 w-fit shadow-lg ring-1 ring-black ring-opacity-5 md:rounded relative">
          <h2 className="text-truth-dark-green text-3xl mb-2 font-bold text-center">
            FREE EBOOK
          </h2>
          <p className="text-center mb-5">
            Enter your details below to get your free ebook.
          </p>
          <div className="text-black">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(fields);
                setPopup(false);
              }}
              className="flex justify-center"
              autoComplete="on"
            >
              <div className="flex w-full gap-4 mb-4 flex-wrap max-w-sm">
                <input
                  id="FNAME"
                  type="text"
                  autoComplete="given-name"
                  value={fields.FNAME as any}
                  required
                  placeholder="First Name"
                  onChange={handleFieldChange}
                  className={inputStyle}
                />
                <input
                  id="LNAME"
                  type="text"
                  autoComplete="family-name"
                  value={fields.LNAME as any}
                  required
                  placeholder="Last Name"
                  onChange={handleFieldChange}
                  className={inputStyle}
                />
                <input
                  id="EMAIL"
                  autoComplete="email"
                  type="email"
                  value={fields.EMAIL as any}
                  required
                  placeholder="Email"
                  onChange={handleFieldChange}
                  className={inputStyle}
                />
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className=" px-6 py-2.5 w-full bg-truth-mid-green text-white font-medium text-sm leading-tight uppercase rounded-full shadow-md hover:bg-truth-dark-green hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {loading && "submitting"}
              {error && message}
              {success && message}
            </form>
          </div>
          <button
            onClick={() => {
              setPopup(false);
            }}
            className="absolute top-2 right-2 inline-block p-2  text-truth-dark-green font-bold text-sm leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          >
            <MdClose />
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
