"use client";

import { useState } from "react";
import { CVData } from "@/types/cv";

interface CVFormProps {
  data: CVData;
  onDataChange: (data: CVData) => void;
  onSave: () => void;
  isSaving?: boolean;
  saved?: boolean;
}

export default function CVForm({ data, onDataChange, onSave, isSaving, saved }: CVFormProps) {
  const [skillsInput, setSkillsInput] = useState(data.skills.join(", "));

  const handleTextChange = (field: keyof CVData, value: string) => onDataChange({ ...data, [field]: value });
  const handleSkillsChange = (value: string) => {
    setSkillsInput(value);
    onDataChange({ ...data, skills: value.split(",").map(s => s.trim()).filter(Boolean) });
  };

  const inputClass = "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none backdrop-blur-md transition placeholder:text-white/25 focus:border-cyan-300/40 focus:bg-white/[0.08] focus:ring-4 focus:ring-cyan-400/5";

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:p-7">
      <div className="mb-7 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300/80">Workspace</p>
          <h2 className="text-2xl font-bold tracking-tight">Build your CV</h2>
          <p className="mt-1 text-sm text-white/45">Your changes appear instantly in the preview.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/10 px-3 py-2 text-xs text-white/40">01 / 01</div>
      </div>

      <div className="space-y-5">
        <label className="block">
          <span className="text-xs font-medium text-white/55">Full name</span>
          <input value={data.fullName} onChange={e => handleTextChange("fullName", e.target.value)} className={inputClass} placeholder="e.g. Sharar Hossain" />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-white/55">Professional role</span>
          <input value={data.role} onChange={e => handleTextChange("role", e.target.value)} className={inputClass} placeholder="e.g. Full-Stack Developer" />
        </label>
        <label className="block">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white/55">Technical stack</span>
            <span className="text-[11px] text-white/25">Separate with commas</span>
          </div>
          <input value={skillsInput} onChange={e => handleSkillsChange(e.target.value)} className={inputClass} placeholder="Next.js, Laravel, TypeScript" />
        </label>

        {data.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {data.skills.map((skill, index) => <span key={index} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1.5 text-xs text-cyan-100">{skill}</span>)}
          </div>
        )}

        <button onClick={onSave} disabled={isSaving} className="group relative mt-3 w-full overflow-hidden rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition hover:scale-[1.01] hover:shadow-cyan-500/20 disabled:cursor-wait disabled:opacity-60">
          <span className="relative z-10">{isSaving ? "Saving…" : saved ? "✓ Saved successfully" : "Save CV to database"}</span>
          <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-full" />
        </button>
      </div>
    </section>
  );
}
