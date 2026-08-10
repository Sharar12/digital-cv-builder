// src/app/page.tsx
"use client";

import { useState } from "react";
import CVForm from "@/components/CVForm";
import CVPreview from "@/components/CVPreview";
import { CVData, initialCVData } from "@/types/cv";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://laravel-api-production-1d1e.up.railway.app";

export default function Home() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const response = await fetch(`${API_URL}/api/cvs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(cvData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Saved successfully:", result);
        alert("CV Saved to Database!");
      } else {
        console.error("Failed to save:", response.status, response.statusText);
        alert("Error saving CV.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Could not connect to Laravel backend.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="flex h-screen bg-gray-100">
      <CVForm
        data={cvData}
        onDataChange={setCvData}
        onSave={handleSave}
      />
      <CVPreview data={cvData} />
    </main>
  );
}