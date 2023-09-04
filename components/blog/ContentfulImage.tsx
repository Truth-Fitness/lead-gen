import Image from "next/future/image";

const contentfulLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: string;
  quality: string;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: any) => {
  return <Image loader={contentfulLoader} {...props} alt="" />;
};

export default ContentfulImage;
