import Link from "next/link";

export default function Home() {
  return (
    <div className="p-20 flex flex-col gap-y-10 items-center justify-center">
      <h1 className="text-3xl font-bold">Next.js App!</h1>
      <div className="flex items-center gap-x-4">
        <Link href="/client" className="hover:underline">Client Fetch</Link>
        <Link href="/rsc" className="hover:underline">RSC Fetch</Link>
      </div>
    </div>
  );
}
