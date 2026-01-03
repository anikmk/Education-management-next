

export default function ErrorFormText({errorMessage}) {
  return (
    <p className="text-xs text-secondary min-h-4 mt-1">
        {errorMessage || ""}
    </p>
  )
}
