export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-4">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="border rounded-lg p-4">
            <div className="w-full h-48 bg-gray-200 animate-pulse" />
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mt-4" />
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse mt-2" />
          </div>
        ))}
      </div>
    </div>
  );
}
