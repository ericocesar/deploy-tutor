"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const getJsonApiDummy = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default function ClientPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getJsonApiDummy().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="p-20 flex flex-col gap-y-10 items-center justify-center">
      <h1 className="text-3xl font-bold">Link2</h1>
      <div>
        {data.map((post: any) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <Link href="/" className="hover:underline">Back</Link>
      </div>
    </div>
  );
}
