
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Container from "@components/Shared/Container/Container";
import { get_school_record } from "@pages/api/school_info/school_info_Api";


export default async function TopNav() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE; 
  const data = await get_school_record(api);
  // const pathshala_logo_api = `${data?.result?.site_path}/${data?.result?.logo}`;

  return (
    <div className="flex flex-col md:flex-row text-accent">
      
      {/* === Left Section (Follow Us) === */}
      <div className="bg-secondary w-full md:w-[30%] p-3 flex justify-center">
        <Container>
          <div className="flex items-center justify-center gap-3 text-lg flex-wrap md:flex-nowrap">
            <span>Follow Us</span>
            <FaSquareFacebook className="text-accent hover:scale-110 duration-300" />
            <FaLinkedin className="text-accent hover:scale-110 duration-300" />
            <FaWhatsappSquare className="text-accent hover:scale-110 duration-300" />
            <FaYoutube className="text-accent hover:scale-110 duration-300" />
          </div>
        </Container>
      </div>

      {/* === Right Section (Contact Info) === */}
      <div className="bg-neutral w-full md:w-[70%] p-3 flex justify-center md:justify-end mt-2 md:mt-0 bg-primary">
        <Container>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end text-lg gap-2 md:gap-4">
            <div>{data?.result?.address}</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 opacity-20"></div>
            <div>{data?.result?.email}</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 opacity-20"></div>
            <div>{data?.result?.contact}</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
