import Link from 'next/link'
import React from 'react'

export default function CommitteeDetailsBtn() {
  return (
    <Link href={`/committee_profile_info`}>
        <button className="bg-primary px-3 py-1 rounded-full text-accent cursor-pointer">
        Details</button>
    </Link>
  )
}
