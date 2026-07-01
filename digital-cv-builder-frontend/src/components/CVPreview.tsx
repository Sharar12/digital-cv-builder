// src/components/CVPreview.tsx
import { CVData } from "@/types/cv";

interface CVPreviewProps {
  data: CVData;
}

export default function CVPreview({ data }: CVPreviewProps) {
  return (
    <div className="w-1/2 p-8 bg-white overflow-y-auto">
      <div className="max-w-md mx-auto border border-gray-200 rounded-lg shadow-lg p-8 bg-white">
        {/* Header Section */}
        <header className="text-center border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {data.fullName || "Your Name"}
          </h1>
          <p className="text-lg text-gray-600 mt-1">
            {data.role || "Your Role"}
          </p>
        </header>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Technical Stack</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.length > 0 ? (
              data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full"
                >
                  {skill}
                </span>
              ))
            ) : (
              <p className="text-gray-400 italic">Add skills to see them here...</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}