import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center items-center">
      <Link href="/event" className="text-white text-xl">
        Event
      </Link>
    </div>
  );
}
