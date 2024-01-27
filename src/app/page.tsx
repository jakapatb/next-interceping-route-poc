import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <h1 className="text-xl font-semibold">
        Prefetch loading and intercepting route POC
      </h1>
      <p>
        The purpose of this repo is POC why the loading.tsx not prefetched and
        instant show loading state when navigating to another page
      </p>
      <br />
      <p>All pages except the homepage share two common features:</p>
      <ul className="list-disc pl-6">
        <li>
          An async sleep function to delay the initial rendering by 5 seconds.
        </li>
        <li>{`A static loading state component called "loading.tsx"`}.</li>
      </ul>
      Expectation from each page:
      <ul className="list-disc pl-6">
        <li>
          loading.js of shop should fetched when the link display in viewport
        </li>
        <li>the loading state should be displayed when navigating instantly</li>
      </ul>
      <br />
      <p>NOTE: open Network panel in inspect and select Slow 3G</p>
      <p>NOTE 2: command + Shift + R to hard refresh (ignore cache)</p>
      {/* divider */}
      <div className="my-8 border-b border-gray-200" />
      <h2 className="text-lg font-semibold">Dynamic route</h2>
      <span className="flex gap-1">
        <Link href="/shop" className="text-blue-500 underline">
          Shop page
        </Link>
      </span>
      <h3 className="font-semibold text-lg">Result:</h3>
      <ul className="list-disc pl-6">
        <li>✅ loading.js is fetched</li>
        <li>✅ instantly display loading state</li>
      </ul>
      <p>
        {`FAQ How to check loading state is fetched : search 'Loading Shop page'`}
      </p>
      {/* divider */}
      <div className="my-8 border-b border-gray-200" />
      <h2 className="text-lg font-semibold">
        Dynamic route - some client component in loading.tsx
      </h2>
      <span className="flex gap-1">
        <Link href="/quest" className="text-blue-500 underline">
          Quest page
        </Link>
      </span>
      <h3 className="font-semibold text-lg">Result:</h3>
      <ul className="list-disc pl-6">
        <li>✅ loading.js is fetched</li>
        <li>❌ instantly display loading state</li>
      </ul>
      <p>
        {`FAQ How to check loading state is fetched : search 'Loading Quest page'`}
      </p>
      {/* divider */}
      <div className="my-8 border-b border-gray-200" />
      <h2 className="text-lg font-semibold">
        Intercepting route - Static page
      </h2>
      <span className="flex gap-1">
        <Link href="/static" className="text-blue-500 underline">
          Static page
        </Link>
      </span>
      <h3 className="font-semibold text-lg">Result:</h3>
      <ul className="list-disc pl-6">
        <li>✅ loading.js is fetched</li>
        <li>✅ instantly display loading state</li>
      </ul>
      <p>
        {`FAQ How to check loading state is fetched : search 'Loading intercepting - Static'`}
      </p>
      {/* divider */}
      <div className="my-8 border-b border-gray-200" />
      <h2 className="text-lg font-semibold">
        Intercepting route - dynamic params page
      </h2>
      <span className="flex gap-1">
        <Link href="/dynamic-params/123" className="text-blue-500 underline">
          dynamic params page - id = 123
        </Link>
      </span>
      <h3 className="font-semibold text-lg">Result:</h3>
      <ul className="list-disc pl-6">
        <li>❌ loading.js is fetched</li>
        <li>❌ instantly display loading state</li>
      </ul>
      <p>
        {`FAQ How to check loading state is fetched : search 'Loading intercepting - Dynamic params'`}
      </p>
    </main>
  );
}
