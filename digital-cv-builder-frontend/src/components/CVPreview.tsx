import { CVData } from "@/types/cv";

interface CVPreviewProps { data: CVData; }

export default function CVPreview({ data }: CVPreviewProps) {
  return (
    <section className="relative min-h-[650px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:p-6">
      <div className="mb-4 flex items-center justify-between px-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/80">Preview</p>
          <h2 className="mt-1 text-lg font-semibold">Your finished CV</h2>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-white/40">A4 · Live</div>
      </div>

      <div className="flex min-h-[580px] items-start justify-center overflow-auto rounded-2xl bg-black/20 p-4 sm:p-8">
        <article className="w-full max-w-[680px] overflow-hidden rounded-sm bg-white text-slate-900 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
          <div className="h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500" />
          <div className="p-7 sm:p-10">
            <header className="border-b border-slate-200 pb-6">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">Curriculum Vitae</p>
              <h1 className="text-3xl font-black tracking-tight sm:text-4xl">{data.fullName || "Your Name"}</h1>
              <p className="mt-2 text-base font-medium text-slate-500">{data.role || "Your Professional Role"}</p>
            </header>

            <section className="pt-7">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900">Technical Stack</h2>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              {data.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => <span key={index} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">{skill}</span>)}
                </div>
              ) : <p className="text-sm italic text-slate-400">Your skills will appear here.</p>}
            </section>

            <section className="mt-9 grid gap-6 border-t border-slate-100 pt-7 sm:grid-cols-2">
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Profile</p><p className="mt-2 text-xs leading-5 text-slate-500">A polished professional profile can be added here as your CV grows.</p></div>
              <div><p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Experience</p><p className="mt-2 text-xs leading-5 text-slate-500">Add your experience, projects, education and achievements.</p></div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
}
