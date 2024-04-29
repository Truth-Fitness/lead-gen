import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type Props = {
  buttonText?: string;
  fullWidth?: boolean;
};

export default function BookNow({
  buttonText = "Book Now",
  fullWidth = false,
}: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <button
        type="button"
        className={`inline-block px-6 py-2.5 ${
          fullWidth ? "w-full   " : ""
        } text-white bg-truth-medium-rose rounded-full hover:bg-truth-dark-rose font-bold text-lg leading-tight uppercase  focus:outline-none focus:ring-0 transition duration-150 ease-in-out cursor-pointer`}
        data-bs-toggle="modal"
        data-bs-target="#bookNowModal"
      >
        {buttonText}
      </button>
      <div
        className="modal fade fixed top-20 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="bookNowModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <form
              method="post"
              action="/api/sendEmail"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log("test", e);
                const form = e.currentTarget;
                const data = new FormData(form);
                const object: any = {};
                data.forEach(function (value: any, key: any) {
                  object[key] = value;
                });
                if (!executeRecaptcha) {
                  console.log("Execute recaptcha not yet available");
                  return;
                }
                const gReCaptchaToken = await executeRecaptcha(
                  "enquiryFormSubmit"
                );
                object.gReCaptchaToken = gReCaptchaToken;
                console.log(object.gReCaptchaToken);
                const res = await fetch("/api/sendEmail", {
                  method: "POST",
                  body: JSON.stringify(object),
                });
                setLoading(true);
                const json = await res.json();
                if (json.success) {
                  setLoading(false);
                  form.reset();
                  setIsSubmitted(true);
                } else {
                  setLoading(false);
                  setError(true);
                }
              }}
            >
              <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-xl font-medium leading-normal text-gray-800"
                  id="exampleModalLabel"
                >
                  Book your call with Cameron
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              {isSubmitted ? (
                <div className="modal-body relative p-4 flex flex-wrap gap-2">
                  <h2>
                    Thanks for sending your details, I will be in touch shortly
                  </h2>
                </div>
              ) : (
                <div className="modal-body relative p-4 flex flex-wrap gap-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="form-control
                     w-full
                            block
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-turq focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    required
                    className="form-control
                    w-full
                            block
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-turq focus:outline-none"
                  />
                </div>
              )}
              {error && (
                <div className="modal-body relative p-4 flex flex-wrap gap-2">
                  <h2>
                    There was an error sending your details, please try again
                    later
                  </h2>
                </div>
              )}
              <div className="modal-footer flex flex-shrink-0 gap-4 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                {!isSubmitted && (
                  <button
                    type="submit"
                    className=" px-6 py-2.5 bg-turq text-white font-medium text-sm leading-tight uppercase rounded-full w-full shadow-md hover:bg-turq-dark hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
