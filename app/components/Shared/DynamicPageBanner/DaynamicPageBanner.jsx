import Image from "next/image";
import GoHomeBtn from "../GoHomeBtn/GoHomeBtn";

export default function DaynamicPageBanner({ image, pageTitle }) {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={pageTitle}
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Text Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-2">{pageTitle}</h1>
        <div className="flex items-center justify-center gap-2 text-md font-semibold">
          <GoHomeBtn btnText={"Home"}/>
          <span>{">>"}</span>
          <h2 className="text-secondary">{pageTitle}</h2>
        </div>
      </div>
    </div>
  );
}
