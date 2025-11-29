

export default async function page({params}) {
    const {id} = await params;
  return (
    <div className="py-32">Teacher Details ID: {id}</div>
  )
}
