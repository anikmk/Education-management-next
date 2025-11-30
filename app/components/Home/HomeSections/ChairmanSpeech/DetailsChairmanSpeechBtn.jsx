'use client'
import Link from "next/link";


export default function DetailsChairmanSpeechBtn() {
  return (
    <div>
       <Link
              href="/chairman-speech/details">
              <button className="inline-block text-accent bg-secondary rounded-2xl font-semibold mt-2 hover:underline py-1 px-3 cursor-pointer text-sm">Read More →</button>
        </Link>
    </div>
  )
}
