import Link from "next/link";

export default function notFound() {
  return (
    <div>
      <p>Error! Blog Not Found</p>
      <Link href={"/"} className="underline font-bold">
        GO HOME!
      </Link>
    </div>
  );
}
