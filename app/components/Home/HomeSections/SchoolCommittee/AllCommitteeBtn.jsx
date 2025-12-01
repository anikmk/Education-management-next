import Link from "next/link";


export default function AllCommitteeBtn() {
  return (
    <div className="pt-10">
      <Link href={'/all_committee'}>
       <button className="bg-primary px-3 py-1 rounded-full text-accent cursor-pointer">All Member</button>
      </Link>
      </div>
  )
}
