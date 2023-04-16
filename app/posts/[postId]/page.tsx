import { getMDFile, getMDFiles } from "@/lib/MDFiles";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { notFound } from "next/navigation";
export function generateMetadata({ params }: { params: { postId: string } }) {
  const { postId } = params;
  return {
    title: postId.replaceAll("-", " "),
  };
}

export default function PostPage({ params }: { params: { postId: string } }) {
  // get the slug of the post
  const { postId } = params;

  // get the matter file content
  const fileContent = getMDFile(postId);

  // render the content as md format
  return (
    <div className="prose mx-auto">
      <div className="container my-6">
        <h1 className="text-3xl">{fileContent.data.title}</h1>
        <Markdown>{fileContent.content}</Markdown>
        <Link className="underline font-bold text-lg" href={"/"}>
          Get Back To Home ={">"}
        </Link>
      </div>
    </div>
  );
}
