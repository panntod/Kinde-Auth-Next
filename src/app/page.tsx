import Link from "next/link"

export default function Home() {
  return (
    <section className="bg-gray-800 text-white rounded-xl p-10 w-4/5 flex flex-col justify-center items-center gap-10 mx-auto grow mb-10 drop-shadow-lg text-center font-bold">
      <h1 className="text-5xl">Let&apos;s start authenicating with Kinde</h1>
      <p className="text-3xl">Configure your app</p>
      <Link href="https://kinde.com/docs/sdks/nextjs-sdk" target="_blank" className="text-xl bg-gray-100 text-black px-6 py-3 rounded-full hover:scale-105">Go to Docs</Link>
    </section>
  )
}
