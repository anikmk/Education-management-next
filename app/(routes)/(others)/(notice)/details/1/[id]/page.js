import { get_single_notice } from "@/api/others/notice/notice";
import Container from "@/components/Shared/Container/Container";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";



export default async function NoticeDetailsPage({params}) {
    const {id} = await params;
    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const noticeDetails = await get_single_notice(id,api);

  return (
    <div className='mt-32 py-16'>
       <Container>
        <div className="mb-10">
                  <h1 className="text-2xl mb-2 font-medium text-center">Notice</h1>
                  <div className="flex items-center justify-center gap-2">
                    <span>Home</span>
                    <span> <MdOutlineKeyboardArrowRight /> </span>
                    <span>Notice</span>
                    <span> <MdOutlineKeyboardArrowRight /> </span>
                    <span className="bg-primary py-1 px-2 rounded text-accent"> Notice Details </span>
                  </div>
                </div>

                 <div className="shadow mb-5 p-3">
                <div className="border-l-[2px] border-l-primary">
                  <div className="ml-2"><h1 className="text-xl font-semibold">{noticeDetails[0]?.title_english}</h1>
                  <p className="text-sm text-slate-500"> Date: {noticeDetails[0]?.notice_date}</p></div>
                </div>

              </div>

            <div>
               <div>
                 <p dangerouslySetInnerHTML={{
              __html: noticeDetails[0]?.des_english,
            }} />
               </div>

               
            </div>
       </Container>
    </div>
  )
}
