import Image from "next/image";
import { FaBookQuran } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import latest_vedio_img from "../../../../../public/assets/img/video/01.jpg";
import Head from "next/head";
import Container from "@components/Shared/Container/Container";

export const metadata = {
  title: "Latest Video | Our Courses & Updates",
  description:
    "Explore our latest educational and motivational videos that inspire learning and growth.",
};

export default function LatestNews() {
  return (
    <>
      {/* SEO Head for better metadata */}
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Text Content */}
            <div className="lg:col-span-4">
              <div className="mb-3">
                <span className="text-xl font-semibold flex items-center gap-2 text-secondary underline">
                  <FaBookQuran /> Latest Video
                </span>
                <h2 className="text-5xl font-bold mt-2">
                  Let’s Check Our{" "}
                  <span className="text-secondary">Latest</span> Video
                </h2>
              </div>

              <p className="text-gray-600 mt-4">
                There are many variations of passages available but the majority
                have suffered alteration in some form by injected humour look
                even slightly believable.
              </p>

              <button className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-secondary text-accent rounded-t-3xl rounded-br-3xl transition">
                Learn More <i className="fas fa-arrow-right-long"></i>
              </button>
            </div>

            {/* Video Content */}
            <div className="lg:col-span-8 relative">
              <div className="rounded-t-[20%] rounded-br-[20%] overflow-hidden relative">
                <Image
                  src={latest_vedio_img}
                  alt="Latest Video"
                  placeholder="blur"
                  quality={90}
                  className="object-cover object-center w-full h-full"
                />
                <a
                  href="https://www.youtube.com/watch?v=ckHzmP1evNU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex justify-center items-center bg-black/30 hover:bg-black/50 transition"
                >
                  <div className="text-7xl text-secondary animate-pulse">
                    <FaPlayCircle />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
