import { getMDFiles } from "@/lib/MDFiles";
import Link from "next/link";

export default function Home() {
  const mdFiles = getMDFiles();

  const previewMD = mdFiles.map((file) => {
    return (
      <div className="my-4 ">
        <Link className="underline" href={`/posts/${file.id}`}>
          <h2 className="text-xl">{file.id}</h2>
        </Link>
        <h3>{file.subtitle}</h3>
        <p>{file.date}</p>
      </div>
    );
  });

  return <div className="container mx-8">{previewMD}</div>;
}
