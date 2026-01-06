import { get_all_notice } from "@/api/others/notice/notice";
import Container from "@/components/Shared/Container/Container";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default async function NoticePage() {
    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const limit = 11;
    const allNotice = await get_all_notice(limit,api);

      const lastNoticeId =
    allNotice?.length > 0
      ? allNotice[allNotice.length - 1].id
      : null;
      console.log(lastNoticeId)
  return (
    <div className='mt-32'>
      <Container>
        <div className="mb-10">
          <h1 className="text-2xl mb-2 font-medium text-center">Notice</h1>
          <div className="flex items-center justify-center gap-2">
            <span>Home</span>
            <span> <MdOutlineKeyboardArrowRight /> </span>
            <span className="bg-primary py-1 px-2 rounded text-accent"> Notice </span>
          </div>
        </div>

        {/* notice card */}

        <div>
          {allNotice.slice(0,10)?.map((notice) => (
            <Link href={`/details/1/${notice?.id}`} key={notice?.id}>
              <div>
              <div className="shadow mb-5 p-3">
                <div className="border-l-[2px] border-l-primary">
                  <div className="ml-2"><h1 className="text-xl font-semibold">{notice?.title_english}</h1>
                  <p className="text-sm text-slate-500"> Date: {notice?.notice_date}</p></div>
                </div>

              </div>
              
            </div>
            </Link>
          ))}

          {/* More button */}
          {
            allNotice?.length > 10 && <div className="flex flex-col items-center justify-center"><button className="bg-primary text-accent p-2 rounded">More</button></div>
          }
        </div>
      </Container>
    </div>
  )
}
