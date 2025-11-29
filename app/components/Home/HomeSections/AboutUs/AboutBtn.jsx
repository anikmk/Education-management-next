'use client'

import Link from "next/link"
import { FaArrowRightLong } from "react-icons/fa6"

export default function AboutBtn({btnText,page_id}) {
  return (
    <div>
      <Link href={'/about'}>
      <button className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300">
          {btnText} <FaArrowRightLong />
      </button>
      </Link>
    </div>
  )
}
