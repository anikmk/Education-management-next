export async function get_school_record(api) {
  const res = await fetch(
    `http://pathshala.cloud/pathshala_2011_app/web/get_institute_records/${api}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}
