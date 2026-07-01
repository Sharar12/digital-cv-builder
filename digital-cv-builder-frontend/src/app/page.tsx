// src/app/page.tsx
"use client";

import { useState } from "react";
import CVForm from "@/components/CVForm";
import CVPreview from "@/components/CVPreview";
import { CVData, initialCVData } from "@/types/cv";

export default function Home() {
  const [cvData, setCvData] = useState<CVData>(initialCVData);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      // Sending data to Laravel 12 Backend
      const response = await fetch("http://localhost:8000/api/cvs", {
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
        console.error("Failed to save:", response.statusText);
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