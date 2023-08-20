export default function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {new Date(dateString).toLocaleDateString("en-GB")}
    </time>
  );
}
