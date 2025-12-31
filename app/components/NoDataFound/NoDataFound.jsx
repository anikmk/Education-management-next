import Link from "next/link";
import emtyImg from "../../../public/assets/img/not-found/empty.png"
import Image from "next/image";
export default function NoDataFound({ title }) {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-secondary mb-2 capitalize">
          {title}
        </h1>

        <div className="flex justify-center mb-6">
          <span className="w-16 h-[2px] bg-gray-400"></span>
        </div>

        {/* Emoji / Icon */}
        <div className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-5xl mb-4">
          <Image src={emtyImg}/>
        </div>

        <p className="text-gray-600 mb-6">
          Sorry! No Information Found.
        </p>

        <Link
          href="/"
          className="inline-block border border-secondary px-6 py-2 rounded hover:bg-red-400 transition font-semibold"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
