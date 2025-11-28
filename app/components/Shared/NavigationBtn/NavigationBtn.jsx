"use client"

import Link from "next/link"

export default function NavigationBtn({text_1,text_2}) {
  return (
    <div className="flex items-center justify-center gap-2 font-semibold "> 
        <Link href={"/"}><button className="bg-">{text_1}</button></Link>
        <button className="bg-">{">"}</button>
        <button className="bg-primary rounded-full text-accent py-1 px-3">{text_2}</button>
    </div>
  )
}
