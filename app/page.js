import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
      <p className="text-lg mb-8">Discover our amazing products</p>
      <Link 
        href="/store" 
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Shop Now
      </Link>
    </div>
  );
}