import { get_all_notice } from "@/api/others/notice/notice";
import Container from "@/components/Shared/Container/Container";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default async function NoticePage() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const limit = 11;
  const allNotice = await get_all_notice(limit, api);

  //   const lastNoticeId =
    // allNotice?.length > 0
    //   ? allNotice[allNotice.length - 1].id
    //   : null;
    //   console.log(lastNoticeId)
   

  return (
    <div className="mt-32 mb-20">
      <Container>

        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-2xl font-semibold mb-2">Notice</h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Home</span>
            <MdOutlineKeyboardArrowRight />
            <span className="bg-primary text-accent px-3 py-1 rounded">
              Notice
            </span>
          </div>
        </div>

        {/* Notice Timeline */}
        <div className="md:grid grid-cols-2 gap-8 relative">
          {allNotice?.slice(0, 10)?.map((notice) => (
            <Link
              href={`/details/1/${notice?.id}`}
              key={notice?.id}
              className="block"
            >
              <div className="relative pl-10 mb-5 group">

                {/* Vertical Line */}
                <span className="absolute left-4 top-0 h-full w-[2px] bg-primary/30"></span>

                {/* Dot */}
                <span className="absolute left-[9px] top-5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></span>

                {/* Card */}
                <div className="bg-accent border-slate-500 rounded p-4 shadow-sm hover:shadow-md transition duration-300 group-hover:translate-x-1">
                  <h2 className="text-lg font-semibold group-hover:text-primary transition">
                    {notice?.title_english}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Date: {notice?.notice_date}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* More Button */}
        {allNotice?.length > 10 && (
          <div className="flex justify-center mt-10">
            <button className="bg-primary text-accent px-6 py-2 rounded hover:opacity-90 transition">
              More Notice
            </button>
          </div>
        )}

      </Container>
    </div>
  );
}
