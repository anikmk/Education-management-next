'use client' // Error boundaries must be Client Components
 
export default function GlobalError({ error, reset }) {
  console.log(error)
  return (

    <html>
      <body className="mt-32">
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}