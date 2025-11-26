
import { get_school_record } from '@/api/school_info/school_info_Api'
import Navbar from './Navbar'

export default async function NavbarServer() {
    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const data = await get_school_record(api)
  return <Navbar data={data}/>
}
