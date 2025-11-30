'use client'
import Link from 'next/link'

export default function NewsDetailsBtn({news_id:id}) {
    
  return (
    <div>
        <Link href={`/news_details/${id}`}><button className='bg-secondary text-accent px-5 py-1 rounded-lg cursor-pointer'>Details</button></Link>
    </div>
  )
}
