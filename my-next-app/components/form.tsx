import Link from "next/link";
import { Button } from "@/components/button";

import {
  PencilSquareIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Planning } from "@/lib/definitions";

const iconBgOptions = [
  "bg-yellow-100",
  "bg-blue-100",
  "bg-green-100",
  "bg-pink-100",
];

const iconColorOptions = [
  "text-yellow-500",
  "text-blue-500",
  "text-green-500",
  "text-pink-500",
];

interface FormProps {
  planning?: Planning;
  buttonAction?: string;
}

const Form = ({ planning, buttonAction }: FormProps) => {
  return (
    // <form action={createPlanning}>
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
            name="title"
            placeholder="e.g. Learn French Basics"
            className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
            defaultValue={planning?.title}
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <PencilSquareIcon className="w-5 h-5 text-gray-400" />
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            placeholder="e.g. Complete chapters 1–5"
            className="mt-1 block w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
            defaultValue={planning?.description}
          />
        </div>

        {/* Icon Upload */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Icon Image
          </label>
          <input
            type="file"
            name="icon"
            accept="image/*"
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
          {planning?.icon && (
            <input type="hidden" name="existingIcon" value={planning.icon} />
          )}
        </div>

        {/* Icon Background */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Icon Background
          </label>
          <select
            name="iconBg"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            defaultValue={planning?.iconBg}
          >
            {iconBgOptions.map((bg) => (
              <option key={bg} value={bg}>
                {bg}
              </option>
            ))}
          </select>
        </div>

        {/* Icon Color */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Icon Color
          </label>
          <select
            name="iconColor"
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            defaultValue={planning?.iconColor}
          >
            {iconColorOptions.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/planning"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">{buttonAction}</Button>
      </div>
    </div>
    // </form>
  );
};

export default Form;
