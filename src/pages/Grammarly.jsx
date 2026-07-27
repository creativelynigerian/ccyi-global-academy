import React, { useState } from "react";
import {
  PenSquare,
  CheckCircle,
  BookOpen,
  Target,
  ExternalLink,
} from "lucide-react";

export default function Grammarly() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 rounded-2xl bg-[#002147] p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">
            Grammarly Writing Centre
          </h1>

          <p className="mt-2 text-blue-200">
            Improve grammar, spelling, clarity, and academic writing.
          </p>
        </div>

        {/* Statistics */}
        <div className="mb-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow">
            <PenSquare className="mb-3 text-blue-700" size={36} />
            <h2 className="text-3xl font-bold">{wordCount}</h2>
            <p className="text-gray-600">Words</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <BookOpen className="mb-3 text-green-600" size={36} />
            <h2 className="text-3xl font-bold">{charCount}</h2>
            <p className="text-gray-600">Characters</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <CheckCircle className="mb-3 text-emerald-600" size={36} />
            <h2 className="text-3xl font-bold">100%</h2>
            <p className="text-gray-600">Grammar Score*</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <Target className="mb-3 text-purple-600" size={36} />
            <h2 className="text-3xl font-bold">Academic</h2>
            <p className="text-gray-600">Writing Goal</p>
          </div>

        </div>

        {/* Editor */}
        <div className="rounded-xl bg-white p-8 shadow">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Writing Workspace
            </h2>

            <a
              href="https://app.grammarly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
            >
              Open Grammarly
              <ExternalLink size={18} />
            </a>
          </div>

          <textarea
            rows={18}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing your essay, assignment, report, or project here..."
            className="w-full rounded-xl border p-6 text-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <h3 className="font-bold text-blue-900">
              Writing Tips
            </h3>

            <ul className="mt-3 list-disc pl-5 text-gray-700">
              <li>Use clear and concise sentences.</li>
              <li>Maintain an academic tone.</li>
              <li>Check subject–verb agreement.</li>
              <li>Avoid plagiarism and cite sources correctly.</li>
              <li>Proofread before submitting your assignment.</li>
            </ul>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            *Grammar Score shown here is a placeholder. Accurate grammar analysis requires integration with Grammarly's services or another grammar-checking engine.
          </p>

        </div>

      </div>
    </div>
  );
}