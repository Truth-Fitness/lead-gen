import Router from "next/router";
import { useEffect } from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function EmailForm({
  buttonColor = "green",
  center = false,
  buttonLabel = "Access Now",
  redirect = false,
}: {
  buttonColor?: "black" | "green";
  center?: boolean;
  buttonLabel?: string;
  redirect?: boolean;
}) {
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    "https://truthfitness.us17.list-manage.com/subscribe/post?u=d195bca7b15b09591a2869256&amp;id=aded1396d7&amp;f_id=001261e0f0"
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
  });

  useEffect(() => {
    if (success && redirect) {
      console.log(error, success, message);
      Router.push("/thankyou");
    }
  });

  const inputStyle =
    "form-control grow max-w-lg block h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-turq focus:outline-none ";

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(fields);
      }}
      autoComplete="on"
    >
      <div className="flex flex-wrap gap-4 mb-4">
        <input
          id="FNAME"
          type="text"
          autoComplete="given-name"
          value={fields.FNAME as any}
          required
          placeholder="First Name"
          onChange={handleFieldChange}
          className={inputStyle + " rounded"}
        />
        <input
          id="LNAME"
          type="text"
          autoComplete="family-name"
          value={fields.LNAME as any}
          required
          placeholder="Last Name"
          onChange={handleFieldChange}
          className={inputStyle + " rounded"}
        />
      </div>
      <div className={`flex ${center ? "" : ""}`}>
        <input
          type="email"
          id="EMAIL"
          autoComplete="email"
          name="email"
          placeholder="Enter your email address"
          value={fields.EMAIL as string}
          required
          onChange={handleFieldChange}
          className={inputStyle + " rounded-l md:min-w-[400px]"}
        />
        <button
          type="submit"
          className={`px-6 py-2.5 ${
            buttonColor === "green"
              ? "bg-gradient-to-br from-truth-light-rose from-0% to-truth-dark-rose to-100% via-truth-medium-rose via-70%"
              : "bg-black hover:bg-gray-800"
          } h-12  text-white font-medium text-sm leading-tight uppercase rounded-r shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out`}
        >
          {loading ? "Submitting" : buttonLabel}
        </button>
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {"Something went wrong"}
        </div>
      )}
      {success && (
        <div className="text-green-800 text-sm mt-2">
          {"You have been subscribed!"}
        </div>
      )}
    </form>
  );
}
