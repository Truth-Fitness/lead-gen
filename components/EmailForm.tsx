import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function EmailForm() {
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    "https://truthfitness.us17.list-manage.com/subscribe/post?u=d195bca7b15b09591a2869256&amp;id=12ff7a1116&amp;f_id=005150e0f0"
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
    FNAME: "",
    LNAME: "",
    tags: "6449266",
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(fields);
      }}
      autoComplete="on"
    >
      <div className="flex">
        <input
          type="email"
          id="EMAIL"
          autoComplete="email"
          name="email"
          placeholder="Enter your email address"
          value={fields.EMAIL as string}
          required
          onChange={handleFieldChange}
          className="form-control block h-12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-turq focus:outline-none md:min-w-[400px]"
        />
        <button
          type="submit"
          className=" px-6 py-2.5 bg-gradient-to-tl h-12 from-navy to-turq text-white font-medium text-sm leading-tight uppercase rounded-r shadow-md hover:to-turq-dark hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
        >
          {loading ? "Submitting" : "Access Now"}
        </button>
      </div>
    </form>
  );
}
