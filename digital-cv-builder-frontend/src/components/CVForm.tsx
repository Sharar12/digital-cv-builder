// src/components/CVForm.tsx
"use client";

import { useState } from "react";
import { CVData } from "@/types/cv";

interface CVFormProps {
  data: CVData;
  onDataChange: (data: CVData) => void;
  onSave: () => void;
}

export default function CVForm({ data, onDataChange, onSave }: CVFormProps) {
  // Local state for the skills input string before splitting
  const [skillsInput, setSkillsInput] = useState(data.skills.join(", "));

  const handleTextChange = (field: keyof CVData, value: string) => {
    onDataChange({ ...data, [field]: value });
  };

  const handleSkillsChange = (value: string) => {
    setSkillsInput(value);
    // Transform comma-separated string into an array of strings
    const skillsArray = value.split(",").map(s => s.trim()).filter(s => s);
    onDataChange({ ...data, skills: skillsArray });
  };

  return (
    <div className="w-1/2 p-8 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Build Your CV</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">Full Name</label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleTextChange("fullName", e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="e.g., Sharar"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Role / Title</label>
          <input
            type="text"
            value={data.role}
            onChange={(e) => handleTextChange("role", e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="e.g., Undergraduate CSE Student"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">Tech Stack (comma separated)</label>
          <input
            type="text"
            value={skillsInput}
            onChange={(e) => handleSkillsChange(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            placeholder="e.g., Laravel 12, Next.js, React"
          />
        </div>

        <button
          onClick={onSave}
          className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          Save to Database (Laravel API)
        </button>
      </div>
    </div>
  );
}