"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full border border-blue-200">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">
          Welcome to My App 👋
        </h1>
        <button
          onClick={() => router.push("/dashboard")}
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition duration-300"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
