"use client";

import { useState } from "react";
import CVForm from "@/components/CVForm";
import CVPreview from "@/components/CVPreview";
import { CVData, initialCVData } from "@/types/cv";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://laravel-api-production-1d1e.up.railway.app";

export default function Home() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [isSaving, setIsSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setSaved(false);
    try {
      const response = await fetch(`${API_URL}/api/cvs`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(cvData),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setSaved(true);
    } catch (error) {
      console.error(error);
      alert("Could not connect to Laravel backend.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#070b16] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="relative border-b border-white/10 bg-white/[0.035] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-violet-500/20 shadow-lg shadow-cyan-500/10">
              <span className="text-lg font-black">CV</span>
            </div>
            <div>
              <h1 className="text-base font-semibold tracking-tight">Digital CV Builder</h1>
              <p className="text-xs text-white/45">Create a CV that stands out.</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400" />
            Live editor
          </div>
        </div>
      </header>

      <div className="relative mx-auto grid max-w-[1600px] gap-6 p-5 lg:grid-cols-[minmax(340px,0.8fr)_minmax(560px,1.2fr)] lg:p-8">
        <CVForm data={cvData} onDataChange={setCvData} onSave={handleSave} isSaving={isSaving} saved={saved} />
        <CVPreview data={cvData} />
      </div>
    </main>
  );
}
