type Props = {
  index: number;
  title: string;
  description: string;
};

const Feature: React.FunctionComponent<Props> = ({
  index,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl shadow bg-truth-dark-green p-3 md:p-6">
      <div className="w-full flex justify-center text-4xl mb-4">
        <div className="rounded-full bg-gradient-to-tl shadow-md from-truth-dark-rose via-truth-medium-rose to-truth-light-rose text-white w-16 h-16 flex justify-center items-center">
          {index}
        </div>
      </div>
      <h3 className="text-center font-semibold uppercase tracking-wider text-white mb-2">
        {title}
      </h3>
      <p className="text-center text-white text-sm">{description}</p>
    </div>
  );
};
export default Feature;
