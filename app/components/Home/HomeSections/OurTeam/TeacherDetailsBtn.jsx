"use client"
import Link from "next/link";

export default function TeacherDetailsBtn({teacher_code:id}) {
  console.log(id)
  return (
    <Link href={`/teacher_profile_info/${id}`}>
        <button className="bg-primary px-3 py-1 rounded-full text-accent cursor-pointer">
        Details</button>
    </Link>
  )
}
