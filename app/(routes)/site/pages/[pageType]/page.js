import { get_individual_pages } from "@/api/individual_page/individual_page_api";
import { get_school_record } from "@/api/school_info/school_info_Api";
import NoDataFound from "@/components/NoDataFound/NoDataFound";
import { LuBookOpenText } from "react-icons/lu";
import Image from "next/image";

// for seo meta data


export async function generateMetadata({ params }) {
  const { pageType } = params;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const pageData = await get_individual_pages(pageType, api);
  const instituteRecord = await get_school_record(api);
  if (!pageData) {
    return {
      title: "Page Not Found",
      description: "Sorry, the page you are looking for does not exist",
    };
  }

  return {
    title: pageData.news_title,
    description: pageData.news_details
      ? pageData.news_details.replace(/<[^>]+>/g, "").slice(0, 160)
      : "Details about " + pageData.news_title,
    openGraph: {
      title: pageData.news_title,
      description: pageData.news_details
        ? pageData.news_details.replace(/<[^>]+>/g, "").slice(0, 160)
        : "Details about " + pageData.news_title,
      type: "article",
      images: pageData.img_ext
        ? [
            `${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/${instituteRecord?.result?.eiin}/site/page/${pageData?.news_id}${pageData?.img_ext}`,
          ]
        : [],
    },
  };
}

// meta data end

export default async function Page({ params }) {
  const { pageType } = params;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;

  const pageData = await get_individual_pages(pageType, api);
  const instituteRecord = await get_school_record(api);

  if (pageData?.news_details === '') {
    return <NoDataFound title={pageType} />;
  }

  const isPdf =
    pageData?.img_ext === ".pdf" &&
    pageData?.showDocument === "1";

  const isImage =
    (pageData?.img_ext === ".jpg" || pageData?.img_ext === ".png") &&
    pageData?.showDocument === "1";

  const fileUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/${instituteRecord?.result?.eiin}/site/page/${pageData?.news_id}${pageData?.img_ext}`;

  return (
    <section className="min-h-screen px-4 py-10 mt-32">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-semibold text-secondary text-center">
          {pageData.news_title}
        </h1>

        <div className="flex justify-center my-3 items-center gap-2">
          <span className="w-16 h-[2px] bg-secondary"></span>
          <LuBookOpenText />
          <span className="w-16 h-[2px] bg-secondary"></span>
        </div>

        {/* Content Render Logic */}
        {isPdf && (
          
          <iframe
            src={fileUrl}
            className="w-full h-[80vh] border rounded-md mt-6"
          />
        )}

        {isImage && (
          <div className="mt-6 flex flex-col justify-center">
            <div
            className="text-gray-700 leading-7 mt-5 mb-3 text-justify"
            dangerouslySetInnerHTML={{
              __html: pageData.news_details,
            }}
          />
            <Image
              src={fileUrl}
              alt={pageData.news_title}
              width={1000}
              height={700}
              className="rounded-md object-contain"
            />
          </div>
        )}

        {!isPdf && !isImage && (
          <div
            className="text-gray-700 leading-7 mt-6 text-justify"
            dangerouslySetInnerHTML={{
              __html: pageData.news_details,
            }}
          />
        )}
      </div>
    </section>
  );
}
