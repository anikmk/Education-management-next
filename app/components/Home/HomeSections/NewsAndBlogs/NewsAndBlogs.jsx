
import Container from "@components/Shared/Container/Container";
import { FaBookOpen, FaRegBookmark, FaLink } from "react-icons/fa";
import Image from "next/image";
import NewsDetailsBtn from "./NewsDetailsBtn";
import { get_news_or_blogs } from "@/api/news_and_blogs/newsAndBlogs";
import { get_school_record } from "@/api/school_info/school_info_Api";

export default async function NewsAndBlogs() {
    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const img_base_url = process.env.NEXT_PUBLIC_IMAGE_BASEURL;
    const schoolRecord = await get_school_record(api);
    const newsData = await get_news_or_blogs(api);

    const course_title_des = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

  return (
        <div className="pt-12">
      <Container>
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-xl flex items-center justify-center gap-2 underline">
            <FaBookOpen />  Our Blog
          </span>
          <h2 className="text-5xl font-bold mt-3">
            Latest News & <span className="text-secondary">Blog</span>
          </h2>
          <p className="text-gray-600 mt-3">
            {course_title_des}
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="shadow-xl overflow-hidden hover:shadow-xl transition duration-300 p-3 rounded-t-3xl rounded-br-3xl"
            >
              {/* Image Section */}
              <div className="relative group ">
                <div className="overflow-hidden">
                <Image
                  src={`${img_base_url}/${schoolRecord?.result?.eiin}/site/documents/${news?.id}${news?.attachment}`}
                  alt={news?.title_english}
                  width={300}
                  height={200}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500 rounded-t-3xl rounded-br-3xl z-0"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <a
                    href="#"
                    className="text-accent text-xl bg-secondary p-3 rounded-full hover:bg-accent hover:text-red-600 transition animate-bounce"
                  >
                    <FaLink />
                  </a>
                </div>
                
              </div>
              <span className="absolute top-4 -right-4 bg-secondary text-accent px-3 py-2 text-sm font-medium rounded-t-3xl rounded-br-3xl flex items-center gap-1 z-10">
                  <FaRegBookmark /> {news?.notice_date}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2">
                    <FaBookOpen className="text-secondary" /> {news?.creator}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBookOpen className="text-secondary" /> 0 Comments
                  </span>
                </div>

                <h3 className="font-bold text-lg mb-2 hover:secondary cursor-pointer">{news.title_english}</h3>
                <NewsDetailsBtn news_id={news?.id}/>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
