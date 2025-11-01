'use client'

import { FaArrowRightLong } from "react-icons/fa6"

export default function Button({btnText}) {
  return (
    <div>
      <button className="inline-flex items-center gap-2 bg-secondary hover:bg-yellow-600 text-white px-6 py-3 rounded-full transition-all duration-300">
          {btnText} <FaArrowRightLong />
      </button>
    </div>
  )
}
