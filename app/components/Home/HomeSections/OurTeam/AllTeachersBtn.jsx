import Link from "next/link"



const AllTeachersBtn = () => {
  return (
    <div className="pt-10">
      <Link href={'/all_teachers'}>
       <button className="bg-primary px-3 py-1 rounded-full text-accent cursor-pointer">All Teachers</button>
      </Link>
    </div>
  )
}

export default AllTeachersBtn