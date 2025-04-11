"use client";

import Link from "next/link";

import { Button } from "@/components/button";

import {
  CalendarIcon,
  PencilSquareIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
  });
  return (
    <form>
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <PencilSquareIcon className="w-6 h-6 text-blue-500" />
          Create New Plan
        </h2>

        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <DocumentTextIcon className="w-5 h-5 text-gray-400" />
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Learn French Basics"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <PencilSquareIcon className="w-5 h-5 text-gray-400" />
              Description
            </label>
            <textarea
              rows={4}
              placeholder="e.g. Complete chapters 1–5"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-gray-400" />
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/planning"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create Plan</Button>
        </div>
      </div>
    </form>
  );
};

export default Form;
