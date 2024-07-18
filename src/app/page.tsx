'use client'
export default function Home() {
  return (
    <section className="flex min-h-screen w-1/3 flex-col items-center justify-between border-r-8 border-gray-400">
      <div className="w-full h-2/3 p-4">
        <label htmlFor="" className="flex flex-row">
        <input type="color" />
        <input type="text" className="bg-slate-400" />
        </label>
      </div>
      <article className="w-full h-1/3 bg-slate-200">

      </article>
    </section>
  );
}
