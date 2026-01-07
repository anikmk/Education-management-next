export default function loading() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        
        {/* spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-secondary rounded-full animate-spin mx-auto mb-4"></div>

        <p className="text-gray-600">Loading...</p>
      </div>
    </section>
  );
}
