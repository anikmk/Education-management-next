"use client"
import Link from "next/link";


export default function GoHomeBtn({btnText}) {
  return (
    <Link className="hover:text-secondary" href={"/"}>{btnText}</Link>
  )
}
