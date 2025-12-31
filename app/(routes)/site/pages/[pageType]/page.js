import { get_individual_pages } from "@/api/individual_page/individual_page_api";
import NoDataFound from "@/components/NoDataFound/NoDataFound";

export default async function Page({ params }) {
  const { pageType } = await params;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;

  const pageData = await get_individual_pages(pageType, api);


  if (pageData.news_details==="") {
    return <NoDataFound title={pageType} />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        
        {/* Title */}
        <h1 className="text-3xl font-semibold text-secondary">
          {pageData.news_title}
        </h1>

        {/* underline */}
        <div className="flex justify-center my-3">
          <span className="w-16 h-[2px] bg-gray-400"></span>
        </div>

        {/* content */}
        <div
          className="text-gray-700 leading-7 mt-6 text-justify"
          dangerouslySetInnerHTML={{
            __html: pageData.news_details,
          }}
        />
      </div>
    </section>
  );
}
